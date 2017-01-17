React = require("react");

var Saved = React.createclass({
  render: function(){
    return (
      <div className="row">
        <div className="col-sm-12">
          <br />
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title"><strong><i className="fa fa-table"> Saved Articles</i></strong></h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Saved;
