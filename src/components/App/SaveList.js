import React from 'react';
import Save from './Save';
import FileManager from '../../object/FileManager';

export default class SaveList extends React.Component {
    render() {
        let fm = new FileManager(this.props.path);
        let rows = fm.getFiles().map((file) => {
            return (
                <Save file={file} />
            )
        });

        return (
            <div>{rows}</div>
        )
    }
}