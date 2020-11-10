import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {getCards} from "../../reducer/pick/selectors.js";
import CardsList from "../cards-list/cards-list.jsx";
import {AboutCard} from "../about-card/about-card.jsx";
import {AbsoluteMenu} from "../absolute-menu/absolute-menu.jsx";
import {Header} from "../header/header.jsx";
import {collectibles} from "../../utils/const.js";
import {ActionCreator as ActionCreatorPick} from "../../reducer/pick/pick.js";
import {ActionCreator as ActionCreatorMoney} from "../../reducer/money/money.js";
import {ActionCreator as ActionCreatorCondition} from "../../reducer/condition/condition.js";
import {ActiveCard, getActiveCard, getActiveMonthNumber, getActiveYearNumber} from "../../reducer/condition/selectors.js";
import {getDustCount} from "../../reducer/money/selectors.js";
import moment from "moment";

import {filterCardsByRarity, filterCardsByMonthDate, getCollectedCardsCountByRarity} from "../../utils/common.js";
import SortByMonthBar from "../month-bar/month-bar.jsx";

const activeSeasonNumber = 0;

class Main extends PureComponent {

  constructor(props) {
    super();

  }

  render() {
    return <React.Fragment>

    </React.Fragment>
  }
}

const mapStateToProps = (state) => {
  return {
  }
};

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);