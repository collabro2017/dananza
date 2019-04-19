import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { increment, decrement } from "../store/reducers/stepCounter";
import { Link } from "react-router-dom";

import "../res/css/infoflowPage.css"

class UploadFiles extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    document.title = "UploadFiles"
  }

  render(){
    return (
		<div className="infoflowPage">
			<div className="full_container">
				<div className="upload_files">
					<div className="nav_flow row">
						<ul className="">
							<li className="cart actived">
								<Link to="/cart"><span className="step_num">1</span>
								Cart Details
								<i className="fa fa-chevron-right"></i></Link>
							</li>
							<li className="checkout active">
								<Link to="/checkout"><span className="step_num">2</span>
								Checkout
								<i className="fa fa-chevron-right"></i></Link>
							</li>
							<li className="upload">
								<span className="step_num">3</span>
								Uploads Media Ad Files
							</li>
						</ul>
					</div>
					<div className="row">
						<div className="cart_des">Your order has been successfully placed! <br/>Please upload your Ad files to get started.</div>
							<form action="" className="dropzone dropzone-file-area dz-clickable" id="my-dropzone">
						<div className="upload_form">
							<div className="send_msg">
								To:<span>
									<img src={require("../res/img/drop_menu_item1.png")}/>Target Tree
									<i className="fa fa-times"></i>
								</span>
								<input type="text"/>
								<i className="fa fa-angle-down"></i>
							</div>
							<div className="note_txt"> </div>
							<textarea rows={8} placeholder="Send a Message to your Adza"></textarea>
	                            {/*<p className="sbold">Drop files here or click to upload</p>*/}
	                            <div className="dz-default dz-message"><span></span></div>	                    	
	                            <div className="upload_submit">
		                    		<i className="fa fa-paperclip"></i> Upload Your Files
		                    		<button className="btn bg-blue color-white btn-medium">Upload</button>	                    		
		                    	</div>
						</div>
						<div className="proceed_chk">
							<div className="checkout">
								<Link to="/postcheckout" className="btn btn-mid bg-yellow color-dark">Submit</Link>
							</div>
						</div>
	                    	</form>
					</div>
				</div>
			</div>
		</div>
	);
  }
}

const mapStateToProps = state => {
  return {
    stepCounter: state.stepCounter
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      increment: () => increment(),
      decrement: () => decrement()
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadFiles);
