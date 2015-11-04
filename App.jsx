// App component - represents the whole app
App = React.createClass({
  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],
 
  // Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {
    return {
    }
  },
 
  render() {
    return (
      <div className="container">
        Im a little app app short and stout
      </div>
    );
  }
});