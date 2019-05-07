import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';

import BuyerSidebar from "../components/Sidebar/BuyerSidebar";

import "../res/css/BuyerSaved.css"

import { buyerSavedActions } from '../store/actions';


class BuyerSaved extends React.Component{

  state={
	'headerType': "buyer", 
	'openAlert' : true,
	'searchText': '',
	'adzas': []
	}

  constructor(props) {
    super(props);
    props.changeHeaderType( this.state.headerType )
  }

  componentDidMount(){
    document.title = "Buyer Saved"
  }

  componentWillMount()
  {
  	const { dispatch } = this.props;
  	dispatch( buyerSavedActions.fetch());
  }
  componentWillReceiveProps(props)
  {
  	this.setState({adzas:props.buyerSavedAdzas.adzas});
  }
  handleSearchField( event ){
  	console.log( this.state.searchText )
  	this.props.history.push("/results?s="+this.state.searchText);
  }

  removeAdza( AdzaProfileId ){
  	this.setState({ openAlert: true });
  }
  handleCloseSnack = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ openAlert: false });
  };
  render(){
  	const { adzas } = this.state;
  	var adza_list = [];
  	if( adzas.success == true && adzas.adzas !== "undefined" )
  		adza_list = adzas.adzas

console.log( "--------------------------" );
console.log( adzas );
    return (
    	<div className="buyer_saved">
	    	<Snackbar
	          anchorOrigin={{
	            vertical: 'top',
	            horizontal: 'right',
	          }}
	          className="info snackAlert"
	          open={this.state.openAlert}
	          onClick={this.handleCloseSnack}
	          message="This is a success message!"
	          action={[
		        <IconButton
		          key="close"
		          aria-label="Close"
		          color="inherit"
		          onClick={this.handleCloseSnack}
		        >
		          <CloseIcon />
		        </IconButton>,
		      ]}
	        />
			<div className="page-container">
				<div className="page-content">
					<BuyerSidebar navitem={"saved"}/>
					<div className="page-main">
						<div className="page-main-header">
							<span className="headline-first">
								Saved Adzas
							</span>
							<span className="headline-second pull-right">
								<i className="fa fa-search input"></i>
		                    	<input type="text" className="form-control search-input" placeholder="Search for saved Adza" 
									onChange={event => {this.setState({searchText: event.target.value})}}
								    onKeyPress={event => {
						                if (event.key === 'Enter') {
						                  this.handleSearchField()
						                }
						            }}
		                    	/>
							</span>
						</div>
						<hr className="divider-line" />
						<div className="adzas row">
							{ adza_list.map( adza =>(
								<div className="col-md-4">
									<div className="item active">
										<div className="item-header">
											<div className="title">
												<Link to={ "/seller_profile/" + adza.AdzaProfileId }>{adza.Adza_Profile.User.business_name}</Link>
											</div>
											<div className="sites">
												<img src={require("../res/img/instagram.png")} />
												<img src={require("../res/img/facebook.png")} />
												<img src={require("../res/img/youtube.png")} />
											</div>
											<div className="types">
												<a className="btn btn-default btn-type btn-food">Food</a>
												<a className="btn btn-default btn-type btn-topchef">TopChef</a>
												<a className="btn btn-default btn-type btn-millenials">Millenials</a>
												<div className="hide-end"></div>
											</div>
										</div>
										<div className="item-image">
											<img src={require("../res/img/item1.png")}/>
										</div>
										<div className="item-footer">
											<div className="reach">
												<i className="fa fa-user"></i>
												<span> 60k+</span> 
											</div>
											<div className="rating">
												<i className="fa fa-star"></i>
												<span> 5.0(17)</span> 
											</div>
											<div className="price">
												<span className="small"> Starting at </span>
												<span className="value"> $100 </span>
												<a onClick={this.removeAdza.bind(this, adza.AdzaProfileId)}><img src={require("../res/img/delete.png")} /></a>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
    );
  }
}

const mapStateToProps = state => {
  	const { buyerSavedAdzas } = state;

	return {
		buyerSavedAdzas
	};
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BuyerSaved);
