// src/components/HubspotModal/HubspotModal.tsx
import React, { useState, useEffect } from 'react';
import styles from './HubspotModal.module.css';

const HubspotModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Escuchar el evento personalizado para abrir el modal desde cualquier CTA
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-hubspot-modal', handleOpen);

    if (isOpen) {
      const portalId = "8283333";
      const formId = "068c0bef-3e89-4878-a82e-28e4ecd16649";

      // Limpiamos el contenedor para evitar remanentes de iframes anteriores
      const container = document.getElementById("hubspotFormContainer");
      if (container) container.innerHTML = "";

      // Si el script global de HubSpot no existe, lo inyectamos
      if (!(window as any).hbspt) {
        const script = document.createElement('script');
        script.src = "//js.hsforms.net/forms/embed/v2.js";
        script.onload = () => createForm(portalId, formId);
        document.body.appendChild(script);
      } else {
        // Si ya existía el script, solo re-creamos el formulario fresco
        createForm(portalId, formId);
      }
    }

    return () => window.removeEventListener('open-hubspot-modal', handleOpen);
  }, [isOpen]);

  const createForm = (pId: string, fId: string) => {
    if ((window as any).hbspt) {
      (window as any).hbspt.forms.create({
        region: "na1",
        portalId: pId,
        formId: fId,
        target: "#hubspotFormContainer"
      });
    }
  };

  return (
    <div 
      className={`${styles.modalOverlay} ${isOpen ? styles.show : styles.hide}`} 
      onClick={() => setIsOpen(false)}
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeModal} onClick={() => setIsOpen(false)}>&times;</button>
        
        <div className={styles.formHeader}>
          <h3>Solicita Información</h3>
          <p>Un asesor se contactará contigo a la brevedad.</p>
        </div>
        
        {/* Este contenedor ahora permanece vivo en el DOM para que HubSpot no falle */}
        <div id="hubspotFormContainer" className={styles.hubspotContainer}></div>
      </div>
    </div>
  );
};

export default HubspotModal;