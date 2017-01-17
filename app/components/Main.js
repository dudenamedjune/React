// require React
var React = require("react");
var Search = require("./components/children/Search");
var Results = require("./components/children/Results");
var Saved = require("./components/children/grandchildren/Saved");

var helpers = require("./utils/helpers");

var Main = React.createClass({
  getInitialState: function(){
    return { searchTerm: "", numResults: "", startYear: "", endYear: "", results: ""};
  },
  componentDidMount: function(){
    helpers.searchNYT(this.state.searchTerm, this.state.numResults, this.state.startYear, this.state.endYear).then(function(data){
      if (data !== this.state.results){
        console.log(data);
        this.setState({results: data});
      }
    }.bind(this));
  },
  getForm: function(searchTerm, numRecordsSelect, startYear, endYear){
    this.setState({searchTerm: searchTerm, numResults: numRecordsSelect, startYear: startYear, endYear: endYear});
  },

  render: function(){

    return (
      <div className="container">

	         {/* <!-- Jumbotron for Title --> */}
	           <div className="jumbotron" style="background-color: #20315A ; color: white;">
		              <h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
	           </div>
             <Search getForm={this.getForm} />
             <Results />
             <Saved />

             {/* footer */}
             <div className="row">
           		<div className="col-sm-12">

           			{/* <!-- Line Break followed by closing --> */}
           			<hr />
           			<h5 className="text-center"><small>Made by Ahmed with lots and lots of <i className="fa fa-heart"></i></small></h5>

           		</div>
           	</div>
      </div>

      );

    }

  });

module.exports = Main;
