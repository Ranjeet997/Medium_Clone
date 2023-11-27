import React, { useState } from "react";
import {
  Editor,
  EditorState,
  RichUtils,
  convertToRaw,
  convertFromRaw,
} from "draft-js";
import "draft-js/dist/Draft.css";

function TextEditor() {
//   const [visibleDiv, setVisibleDiv] = useState("hidden");
//   const [showStyleTextEditor, setShowStyleTextEditor] = useState(false);

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const onChange = (editorState) => {
    setEditorState(editorState);
  };

  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      onChange(newState);
      return true;
    }
    return false;
  };

  const onItalicClick = () => {
    onChange(RichUtils.toggleInlineStyle(editorState, "ITALIC"));
  };

  const onBoldClick = () => {
    onChange(RichUtils.toggleInlineStyle(editorState, "BOLD"));
  };

  const onHeadingTwoClick = () => {
    onChange(RichUtils.toggleBlockType(editorState, "header-one"));
  };

  const onHeadingThreeClick = () => {
    onChange(RichUtils.toggleBlockType(editorState, "header-three"));
  };

  const onQuoteClick = () => {
    onChange(RichUtils.toggleBlockType(editorState, "blockquote"));
  };

    const onSave = () => {
      const content = convertToRaw(editorState.getCurrentContent());
      console.log(content);
    };

  const onRestore = () => {
    const content = convertFromRaw({
      entityMap: {},
      blocks: [
        {
          text: "Restore Example",
          type: "unstyled",
          depth: 0,
          inlineStyleRanges: [],
          entityRanges: [],
          data: {},
        },
      ],
    });
    onChange(EditorState.createWithContent(content));
  };

  return (
    <div className="App">
      <div
        className={`toolbar inline-block justify-center bg-black text-white px-5 py-1 rounded-md`}
      >
        <div className="font-source-serif-pro font-semibold text-[1.4rem] space-x-5">
          <button onClick={onBoldClick}>B</button>
          <button onClick={onItalicClick}>i</button>
          <button onClick={onHeadingTwoClick} className="text-[1.9rem]">T</button>
          <button onClick={onHeadingThreeClick}>T</button>
          <button onClick={onQuoteClick}>
              <img src="../images/quotes.png" alt="" className="w-[1rem]" />
          </button>
        </div>
      </div>

      <div className="editor">
        <Editor
          editorState={editorState}
          onChange={onChange}
          handleKeyCommand={handleKeyCommand}
          placeholder="Write somthing"
          className="outline-none w-[20rem] md:w-[43rem] 2xl:w-[47rem] text-lg md:text-[1.5rem] lg:text-[1.35rem] xl:text-[1.5rem] text-neutral-600 font-crimson font-medium md:ml-6"
        />
      </div>
    </div>
  );
}

export default TextEditor;
