import React, { Component } from "react";
import MediumEditor from "medium-editor";
import "medium-editor/dist/css/medium-editor.css";
import "medium-editor/dist/css/themes/default.css";

class MyEditor extends Component {
  constructor(props) {
    super(props);
    this.editorRef = React.createRef();
    // console.log("thsi is the content",this.props.postContent);
  }
  
  componentDidMount() {
    this.editor = new MediumEditor(this.editorRef.current, {
      placeholder: {
        text: "Write your story",
        hideOnClick: true,
      },
      toolbar: {
        buttons: [
          "bold",
          "italic",
          "underline",
          "highlighter",
          "quote",
          "anchor",
          "h2",
          "h3",
          "html",
        ],
        buttonLabels: "fontawesome",
        sticky: true,
      },
    });
    // console.log("loaded: ", this.editor.getContent());
  }

  componentDidUpdate() {
    localStorage.setItem("page-content", this.editor.getContent());
    // console.log(this.props.onSave);
    if(this.props.postContent){
      this.editor.setContent(this.props.postContent);
    }
    // else if (this.props.onSave) {
    //   localStorage.setItem("page-content", this.editor.getContent());
    //   // console.log("this is called save editor data on localstorage");
    // }
  }

  componentWillUnmount() {
    this.editor.destroy();
  }

  render() {
    return (
      <>
        <div className="editable" ref={this.editorRef}></div>

        <style>
          {`
            .medium-editor-element {
              outline: none;
            }
            .medium-editor-placeholder {
              fontStyle: normal;
            }
          `}
        </style>
      </>
    );
  }
}

export default MyEditor;
