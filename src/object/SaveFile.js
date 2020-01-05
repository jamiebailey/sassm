import path from 'path';

const fs = require('fs');

const VERSIONS = {
    0x7581DA35: '1.00 Unmodified EXE',
    0x83E5F365: '1.00 Modified EXE',
    0x5E764593: '1.01 Modified EXE'
};

export default class SaveFile {
    constructor(filepath) {
        let buff = Buffer.from(filepath);
        this.id = buff.toString('hex');
        this.dirname = path.dirname(filepath);
        this._path = filepath;
        this._binary = fs.readFileSync(this._path);
        this._readBlocks();
    }

    getVersionID() {
        return this._getBlockSlice(0, 0x0000, 0x0004).readUInt32BE();
    }

    getVersionName() {
        return VERSIONS[this.getVersionID()];
    }

    getSaveName() {
        return this._getBlockSlice(0, 0x0004, 0x0068).toString('utf8');
    }

    getGameMonth() {
        return this._getBlockSlice(0, 0x0084, 0x0085).readUInt8();
    }

    getGameDay() {
        return this._getBlockSlice(0, 0x0085, 0x0086).readUInt8();
    }

    getGameWeekday() {
        return this._getBlockSlice(0, 0x0088, 0x0089).readUInt8();
    }

    getGameWeekdayText() {
        switch(this.getGameWeekday()) {
            case 0:
                return 'Sunday';
            case 1:
                return 'Monday';
            case 2:
                return 'Tuesday';
            case 3:
                return 'Wednesday';
            case 4:
                return 'Friday';
            case 5:
                return 'Thursday';
            case 6:
                return 'Saturday';
        }
    }

    getGameHour() {
        return this._getBlockSlice(0, 0x0086, 0x0087).readUInt8();
    }

    getGameMinute() {
        return this._getBlockSlice(0, 0x0087, 0x0088).readUInt8();
    }
    
    getPlayer() {
        return this._getBlockSlice(2, 0x04, 0x228);
    }

    getPlayerHealth() {
        var player = this.getPlayer();
        return player.slice(0x001C, 0x0020).readFloatLE();
    }

    getPlayerArmor() {
        var player = this.getPlayer();
        return player.slice(0x0020, 0x0024).readFloatLE();
    }

    getPlayerMoney() {
        return this._getBlockSlice(15, 0x04, 0x08).readUInt32LE();
    }

    _getBlock(id) {
        return this._blocks[id];
    }

    _getBlockSlice(id, start, end) {
        return this._getBlock(id).slice(start, end);
    }

    _readBlocks() {
        this._blocks = [];
        var index = 0;
        while(true) {
            var prev = index;
            index = this._binary.indexOf("BLOCK", prev);
            if(index === -1) {
                this._blocks.push(this._binary.slice(prev, this._binary.length));
                break;
            }
            if(index > 0) {
                this._blocks.push(this._binary.slice(prev, index));
            }
            index += 5;
        }
    }

    toJSON() {
        return {
            path: this._path,
            game: {
                version: {
                    id: this.getVersionID(),
                    name: this.getVersionName()
                },
                mission: this.getSaveName(),
                date: {
                    month: this.getGameMonth(),
                    date: this.getGameDay(),
                    day: this.getGameWeekdayText()
                },
                time: {
                    hour: this.getGameHour(),
                    minute: this.getGameMinute()
                },
                player: {
                    health: this.getPlayerHealth(),
                    armor: this.getPlayerArmor(),
                    money: this.getPlayerMoney(),
                }
            },
        };
    }

    info() {
        var output = '';
        output += '\ndate:\t\t' + this.getGameMonth() + '/' + this.getGameDay() + ' ' + this.getGameWeekdayText();
        output += '\ntime:\t\t' + this.getGameHour() + ':' + this.getGameMinute();
        output += '\nmoney:\t\t$' + this.getPlayerMoney();
        output += '\nhealth/armor:\t' + this.getPlayerHealth() + '/' + this.getPlayerArmor();
        return output;
    }
}