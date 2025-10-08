// Modal.tsx

// Import React libraries
import React, { useEffect } from 'react'

// Define the properties expected by the Modal component
interface ModalProps {
  isOpen: boolean // Indicates whether the modal is open or not
  onClose: () => void // Callback function to close the modal
  message: string | null // Message to be displayed in the modal (nullable)
}

// Functional component definition for Modal
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, message }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  // If the modal is not open or no message is provided, return null (no rendering)
  if (!isOpen || message === null) {
    return null
  }

  // Handle ESC key to close modal
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose()
    }
  }

  // Render the Modal with the provided message and a Close button
  return (
    <div
      className='modal-overlay'
      onClick={() => onClose()}
      onKeyDown={handleKeyDown}
      role='dialog'
      aria-modal='true'
      tabIndex={-1}
    >
      <div className='modal' onClick={(e) => e.stopPropagation()}>
        <div className='modal-header'>
          <h3>Form Submission Result</h3>
        </div>
        <div className='modal-content'>
          <pre>{message}</pre>
        </div>
        <div className='modal-footer'>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  )
}

// Export the Modal component as the default export
export default Modal
