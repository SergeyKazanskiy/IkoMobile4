import React from "react";
import Add from "./Add";
import AngleDown from "./AngleDown";
import AngleLeft from "./AngleLeft";
import AngleRight from "./AngleRight";
import AngleUp from "./AngleUp";
import Cancel from "./Cancel";
import Copy from "./Copy";
import Cut from "./Cut";
import Download from "./Download";
import Expand from "./Expand";
import Paste from "./Paste";
import Redo from "./Redo";
import Trash from "./Trash";
import Undo from "./Undo";
import Upload from "./Upload";
import { CommandTypes } from "../../constants/CommandNames";

import { CommandButtonType } from "./types";

const Icon = (props: CommandButtonType): JSX.Element => {
  switch (props.name) {
    case CommandTypes.ADD:
      return <Add {...props} />;
    case CommandTypes.MOVE_DOWN:
      return <AngleDown {...props} />;
    case CommandTypes.MOVE_LEFT:
      return <AngleLeft {...props} />;
    case CommandTypes.MOVE_RIGHT:
      return <AngleRight {...props} />;
    case CommandTypes.MOVE_UP:
      return <AngleUp {...props} />;
    case CommandTypes.CANCEL:
      return <Cancel {...props} />;
    case CommandTypes.COPY:
      return <Copy {...props} />;
    case CommandTypes.CUT:
      return <Cut {...props} />;
    case CommandTypes.DOWNLOAD:
      return <Download {...props} />;
    case CommandTypes.GROUP:
      return <Expand {...props} />;
    case CommandTypes.PASTE:
      return <Paste {...props} />;
    case CommandTypes.REDO:
      return <Redo {...props} />;
    case CommandTypes.DELETE:
      return <Trash {...props} />;
    case CommandTypes.UNDO:
      return <Undo {...props} />;
    case CommandTypes.UPLOAD:
      return <Upload {...props} />;
    default:
      return <Upload {...props} />;
  }
};

export default Icon;
