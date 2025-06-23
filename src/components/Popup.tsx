import { Button, Modal } from "react-bootstrap";

type Props = {
  show: boolean;
  handleClose: () => void;
  message: string;
};

const Popup = ({ show, handleClose, message }: Props) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose} size="sm">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Popup;
