import './actions.module.scss';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

/* eslint-disable-next-line */
export interface ActionsProps {}

export function Actions(props: ActionsProps) {
  return (
    <div className="text-center last-div">
      <ButtonGroup size="lg" className="mb-4 pt-4">
        <Button className="btn btn-success">Sound</Button>
        <Button className="btn btn-primary">Ping</Button>
        <Button className="btn btn-danger">Delete</Button>
      </ButtonGroup>
    </div>
  );
}

export default Actions;
