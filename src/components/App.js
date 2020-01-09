import React, { Component } from 'react';
import { visiblePage } from '../actions';
import Left from './AppLeft';
import Page from './elements/Page';
import TitleBarButtons from '../containers/AppTitleBarButtons';
import GTASaveInfo from '../components/elements/GTASaveInfo';

export default class App extends Component {
    render() {
        let page;

        switch(this.props.visiblePage) {
            case visiblePage.SHOW_ACTIVE:
                page = <Page title="Active">
                    <GTASaveInfo filename="GTASAsf1.b" saveName="Big Smoke" gameHours="04" gameMinutes="34" playerMoney="350" playerArmor="0" playerMaxHealth="50" />
                    <GTASaveInfo filename="GTASAsf2.b" saveName="Ryder" gameHours="06" gameMinutes="56" playerMoney="6000" playerArmor="40" playerMaxHealth="50" />
                    <GTASaveInfo filename="GTASAsf3.b" saveName="Tagging Up Turf" gameHours="14" gameMinutes="34" playerMoney="600" playerArmor="80" playerMaxHealth="50" />
                    <GTASaveInfo filename="GTASAsf4.b" saveName="Cleaning The Hood" gameHours="17" gameMinutes="45" playerMoney="780" playerArmor="100" playerMaxHealth="75" />
                    <GTASaveInfo filename="GTASAsf5.b" saveName="Drive-Thru" gameHours="01" gameMinutes="23" playerMoney="900" playerArmor="60" playerMaxHealth="100" />
                </Page>
                break;
            case visiblePage.SHOW_STORAGE:
                page = <Page title="Storage">Test2</Page>
                break;
        }

        return <div className="app">
            <Left items={[
                    {text: 'Active', type: 'navigate', page: visiblePage.SHOW_ACTIVE},
                    {text: 'Storage', type: 'navigate', page: visiblePage.SHOW_STORAGE},
                    {text: 'Exit', type: 'exit'}
                ]} />
            {page}
            <TitleBarButtons />
        </div>
    }
}