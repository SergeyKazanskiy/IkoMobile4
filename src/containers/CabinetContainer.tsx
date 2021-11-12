import { connect } from "react-redux";
import { AppState } from "../store";
import { deleteMessage } from "../store/chat/actions";
import ChatHistory from "../components/ChatHistory";

const mapStateToProps = (state: AppState) => ({
  messages: state.chat.messages
});

export default connect(mapStateToProps, { deleteMessage })(ChatHistory);

/*
const mapStateToProps = state => ({
  mode: state.mode
})

const mapDisptchToProps = dispatch => ({
  setEdit: id => dispatch(setEditMode(id)),
  setSelected: id => dispatch(setSelectedMode(id)),
})

interface OwnProps {
  id: string;
}

const mergeProps = (ownProps, mapProps, dispatchProps) => {
  const { id } = ownProps
  const { mode } = mapProps
  const { setEdit, setSelected } = dispatchProps
  return {
    onClick: () => {
      if(mode === 'browse') {
        setSelected(id)
      }    
      if(mode === 'edit') {
        setEdit(id)
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Polygon)

export type MergedProps<T> = {
  dispatch: DispatchProps["dispatch"],
  s: StateProps["state"],
  o: T
};

export default connect<StateProps, DispatchProps, OwnProps, MergeProps<OwnProps>, RootState>(
  mapState,
  mapDispatch,
  mergeProps  
)(MyComponent);

*/
