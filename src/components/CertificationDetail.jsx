import Modal from "./Modal";

export default function CertificationDetail({ bucket, onClose }) {
  return (
    <Modal onClose={onClose} ariaLabel={bucket.issuer}>
      <h3>{bucket.issuer}</h3>
      <ul className="cert-modal-list">
        {bucket.items.map((cert) => (
          <li key={cert.name}>{cert.name}</li>
        ))}
      </ul>
    </Modal>
  );
}
