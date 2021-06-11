import { Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";

export function RegistrationModal() {
  const state = useSelector((state) => state);
  return (
    <Modal show={state.registration.list.userId}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary">Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
