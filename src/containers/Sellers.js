import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { increment, decrement } from "../store/reducers/stepCounter";

import "../res/css/infoflowPage.css"

class Sellers extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    document.title = "Sellers"
  }

  render(){
    return (
		<div class="sellers container">
			<div class="row">
				<div class="sidebar col-md-3">
					<div class="section target_tree">
						<div class="image">
							<img src="./res/img/profile_photo.png">
							<div class="tree">Target Tree</div>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							5.0<span class="reviews_star">(17 Reviews)</span>
							<div class="official">
								Official Account of Target Tree Miami
							</div>
							<div class="msg">
								<a href="#" class="message_link">Message</a>
							</div>
							<div class="divider"></div>
						</div>
					</div>
					<div class="from_avg">
						<div class="from">
							<i class="fa fa-map-pin"></i> From
							<span class="value">Miami</span>
						</div>
						<div class="avg">
							<i class="fa fa-map-pin"></i> Avg. Response Time
							<span class="value">8 hrs</span>
						</div>
					</div>
					<div class="channels">
						<i class="fa fa-map-pin"></i> Channels
						<span class="social_icons">
							<img src="./res/img/instagram.png">
							<img src="./res/img/facebook.png">
							<img src="./res/img/youtube.png">
						</span>
					</div>
					<div class="audience">
						<i class="fa fa-user"></i>
						Audience Attributes
						<div class="info row">
							<div class="felid col-md-4">
								Age
							</div>
							<div class="value col-md-6">
								30-45 yrs old
							</div>
						</div>
						<div class="info row">
							<div class="felid col-md-4">
								Gender
							</div>
							<div class="value col-md-6">
								Men 40%<br/> 
								Female 60%
							</div>
						</div>
						<div class="info row">
							<div class="felid col-md-4">
								Location
							</div>
							<div class="value col-md-6">
								Miami<br/> 
								Los Angeles<br/>
								San Francisco
							</div>
						</div>
						<div class="info row">
							<div class="felid col-md-4">
								Interests
							</div>
							<div class="value col-md-6">
								Local Events,Local Dining, Gyms, Sports, Local News, Local Activities, Trendy Restaurants, Trendy Bars, Local Guides, Local Business, Professional Sports, Craft Breweries, Miami
							</div>
						</div>
					</div>
				</div>
				<div class="sellers_content col-md-9">
					<div class="row slider">
						<img src="./res/img/sellers_slider1.png">
					</div>
					<div class="row listings">
						<div class="portlet-title">
		                    <div class="caption">
		                        Listings 
		                    </div>
		                    <div class="tools">
		                        <a href="javascript:;" class="collapse" data-original-title="" title=""> </a>
		                        <a href="#portlet-config" data-toggle="modal" class="config" data-original-title="" title=""> </a>
		                        <a href="javascript:;" class="reload" data-original-title="" title=""> </a>
		                        <a href="javascript:;" class="remove" data-original-title="" title=""> </a>
		                    </div>
		                </div>
		                <div class="portlet-body">
		                    <div class="panel-group accordion" id="accordion3">
		                        <div class="panel panel-default">
		                            <div class="panel-heading">
		                                <h4 class="panel-title">
		                                    <a class="accordion-toggle accordion-toggle-styled collapsed" data-toggle="collapse" data-parent="#accordion3" href="#collapse_3_1" aria-expanded="false"> Collapsible Group Item #1 </a>
		                                </h4>
		                            </div>
		                            <div id="collapse_3_1" class="panel-collapse collapse" aria-expanded="false" style="height: 0px;">
		                                <div class="panel-body">
		                                    <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
		                                    <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
		                                        eiusmod. </p>
		                                </div>
		                            </div>
		                        </div>
		                        <div class="panel panel-default">
		                            <div class="panel-heading">
		                                <h4 class="panel-title">
		                                    <a class="accordion-toggle accordion-toggle-styled collapsed" data-toggle="collapse" data-parent="#accordion3" href="#collapse_3_2" aria-expanded="false"> Collapsible Group Item #2 </a>
		                                </h4>
		                            </div>
		                            <div id="collapse_3_2" class="panel-collapse collapse" aria-expanded="false" style="height: 0px;">
		                                <div class="panel-body" style="height:200px; overflow-y:auto;">
		                                    <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
		                                    <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
		                                        eiusmod. </p>
		                                    <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
		                                    <p>
		                                        <a class="btn blue" href="ui_tabs_accordions_navs.html#collapse_3_2" target="_blank"> Activate this section via URL </a>
		                                    </p>
		                                </div>
		                            </div>
		                        </div>
		                        <div class="panel panel-default">
		                            <div class="panel-heading">
		                                <h4 class="panel-title">
		                                    <a class="accordion-toggle accordion-toggle-styled collapsed" data-toggle="collapse" data-parent="#accordion3" href="#collapse_3_3" aria-expanded="false"> Collapsible Group Item #3 </a>
		                                </h4>
		                            </div>
		                            <div id="collapse_3_3" class="panel-collapse collapse" aria-expanded="false" style="height: 0px;">
		                                <div class="panel-body">
		                                    <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
		                                        eiusmod. Brunch 3 wolf moon tempor. </p>
		                                    <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
		                                    <p>
		                                        <a class="btn green" href="ui_tabs_accordions_navs.html#collapse_3_3" target="_blank"> Activate this section via URL </a>
		                                    </p>
		                                </div>
		                            </div>
		                        </div>
		                        <div class="panel panel-default">
		                            <div class="panel-heading">
		                                <h4 class="panel-title">
		                                    <a class="accordion-toggle accordion-toggle-styled collapsed" data-toggle="collapse" data-parent="#accordion3" href="#collapse_3_4" aria-expanded="false"> Collapsible Group Item #4 </a>
		                                </h4>
		                            </div>
		                            <div id="collapse_3_4" class="panel-collapse collapse" aria-expanded="false" style="height: 0px;">
		                                <div class="panel-body">
		                                    <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
		                                    <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
		                                        eiusmod. Brunch 3 wolf moon tempor. </p>
		                                    <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
		                                    <p>
		                                        <a class="btn red" href="ui_tabs_accordions_navs.html#collapse_3_4" target="_blank"> Activate this section via URL </a>
		                                    </p>
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		            </div>
		            <div class="row reviews">
		            	<div class="caption">
		            		Reviews
		            		<i class="fa fa-star"></i> <span class="mark_star">5.0</span> <span class="reviews_star">(17 Reviews)</span>
		            	</div>
		            	<div class="review_lists">
		            		<div class="person">
		            			<img src="./res/img/review_thum1.png"> maximsalveson
		            			<i class="fa fa-star"></i> 5.0
		            		</div>
		            		<div class="content">
		            			Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo!
		            		</div>
		            		<div class="divider"></div>

		            		<div class="person">
		            			<img src="./res/img/review_thum1.png"> maximsalveson
		            			<i class="fa fa-star"></i> 5.0
		            		</div>
		            		<div class="content">
		            			Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo!
		            		</div>
		            		<div class="divider"></div>

		            		<div class="person">
		            			<img src="./res/img/review_thum1.png"> maximsalveson
		            			<i class="fa fa-star"></i> 5.0
		            		</div>
		            		<div class="content">
		            			Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo!
		            		</div>
		            		<div class="divider"></div>
		            		<div class="seemore">
		            			<button>See More <i class="fa fa-angle-down"></i></button>
		            		</div>
		            	</div>
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
)(Sellers);
