import React, { Component } from "react";
import { connect } from "react-redux";
import { addmovie, editmovie } from "../actions/actions";
class Add extends Component {
  state = {
    title: this.props.movie ? this.props.movie.title : "",
    rate: this.props.movie ? this.props.movie.rate : "",
    img: this.props.movie ? this.props.movie.img : "",
    year: this.props.movie ? this.props.movie.year : ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div style={{ right: "0", bottom: "0", margin: "25px" }}>
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          {this.props.movie ? "edit" : "add"}
        </button>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Add Movie
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label for="title">movie title</label>
                    <input
                      type="text"
                      name="title"
                      value={this.state.title}
                      class="form-control"
                      id="title"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div class="form-group">
                    <label for="image">movie image</label>
                    <input
                      type="text"
                      name="img"
                      value={this.state.img}

                      class="form-control"
                      id="image"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div class="form-group">
                    <label for="year">movie year</label>
                    <input
                      type="text"
                      name="year"
                      value={this.state.year}

                      class="form-control"
                      id="year"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div class="form-group">
                    <label for="rate">movie rate</label>
                    <input
                      type="number"
                      name="rate"
                      value={this.state.rate}

                      class="form-control"
                      id="rate"
                      onChange={this.handleChange}
                    />
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-dismiss="modal"
                  onClick={() => {
                    this.props.movie
                      ? this.props.editmovie(this.state, this.props.movie.id)
                      : this.props.addmovie({
                          id: Math.random(),
                          ...this.state
                        });
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { addmovie, editmovie })(Add);
