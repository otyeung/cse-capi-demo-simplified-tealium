// src/ContactForm.tsx
import React, { useState, useEffect, useRef } from 'react'
import './App.css' // Importing styles
import Modal from './Modal' // Assuming you have a Modal component

// declare function gtag(...args: any[]): void

declare global {
  interface Window {
    dataLayer: any[]
    gtag: (command: string, event: string, data: any) => void
  }
}

// Define type/interface for form data
interface FormData {
  li_fat_id: string
  lastName: string
  firstName: string
  email: string
  title: string
  company: string
  countryCode: string
  currency: string
  value: string
  acxiomId: string
  oracleMoatId: string
  leadId: string
}

// Default values for form data
const initialFormData: FormData = {
  li_fat_id: '',
  lastName: 'Doe',
  firstName: 'John',
  email: 'johndoe@example.com',
  title: 'Engineer',
  company: 'Acme Inc',
  countryCode: 'US',
  currency: 'USD',
  value: '0.0',
  acxiomId: '12345678',
  oracleMoatId: '12345678',
  leadId: '12345678',
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalMessage, setModalMessage] = useState<string | null>(null) // To store the message for modal
  const isAnalyticsExecuted = useRef(false)

  useEffect(() => {
    const fetchData = async () => {
      const li_fat_id =
        (typeof window !== 'undefined' &&
          new URLSearchParams(window.location.search).get('li_fat_id')) ||
        (typeof document !== 'undefined' && getCookie('li_fat_id')) ||
        ''

      if (li_fat_id && !isAnalyticsExecuted.current) {
        setFormData((prevData) => ({ ...prevData, li_fat_id }))
        isAnalyticsExecuted.current = true
      }
    }

    fetchData()
  }, []) // Empty dependency array ensures it runs only once

  // Begin Cookie routine
  function getCookie(name: string): string | undefined {
    if (typeof document !== 'undefined') {
      const matches = document.cookie.match(
        new RegExp(
          '(?:^|; )' +
            name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') +
            '=([^;]*)'
        )
      )
      return matches ? decodeURIComponent(matches[1]) : undefined
    }
    return undefined
  }
  // End Cookie routine

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      console.log('Form submitted successfully:', formData)

      // Set the modal message to display all form data as a string
      setModalMessage(
        'Form submitted successfully : ' + JSON.stringify(formData, null, 2)
      )
      setSubmissionStatus('success')
      setIsModalOpen(true)
    } catch (error) {
      console.error('Error submitting form:', error)
      setModalMessage('Error submitting form: ' + error)
      setSubmissionStatus('error')
      setIsModalOpen(true)
    }
  }

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))

    // No special handling for email needed anymore
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleResetForm = () => {
    setFormData(initialFormData)
  }

  // SHA-256 hashing function has been removed

  return (
    <>
      <div className='App'>
        <form className='centered-form' onSubmit={handleSubmit} id='capiForm'>
          <h1 className='form-title'>LinkedIn Online CAPI Demo with Adobe</h1>

          <div className='form-section'>
            <label>
              li_fat_id (browser 1P cookie or page URL):
              {formData.li_fat_id ? (
                <span className='red-text'>{formData.li_fat_id}</span>
              ) : (
                <span className='red-text'>not detected</span>
              )}
              <input
                type='hidden'
                name='li_fat_id'
                value={formData.li_fat_id}
                id='li_fat_id'
              />
            </label>
          </div>

          {/* Personal Information */}
          <div className='field-group two-col'>
            <label>
              First Name:
              <input
                type='text'
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}
                id='firstName'
              />
            </label>

            <label>
              Last Name:
              <input
                type='text'
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
                id='lastName'
              />
            </label>
          </div>

          {/* Email Section */}
          <div className='form-section'>
            <label>
              Email:
              <input
                type='email'
                name='email'
                id='email'
                value={formData.email}
                onChange={handleChange}
              />
            </label>
          </div>

          {/* Professional Information */}
          <div className='field-group two-col'>
            <label>
              Title:
              <input
                type='text'
                name='title'
                value={formData.title}
                onChange={handleChange}
                id='title'
              />
            </label>

            <label>
              Company:
              <input
                type='text'
                name='company'
                value={formData.company}
                onChange={handleChange}
                id='company'
              />
            </label>
          </div>

          {/* Location and Currency */}
          <div className='field-group two-col'>
            <label>
              Country Code:
              <input
                type='text'
                name='countryCode'
                value={formData.countryCode}
                onChange={handleChange}
                id='countryCode'
              />
            </label>

            <label>
              Currency:
              <input
                type='text'
                name='currency'
                value={formData.currency}
                onChange={handleChange}
                id='currency'
              />
            </label>
          </div>

          {/* Value and IDs */}
          <div className='form-section'>
            <label>
              Value:
              <input
                type='text'
                name='value'
                value={formData.value}
                onChange={handleChange}
                id='value'
              />
            </label>
          </div>

          <div className='field-group'>
            <label>
              Acxiom ID:
              <input
                type='text'
                name='acxiomId'
                value={formData.acxiomId}
                onChange={handleChange}
                id='acxiomId'
              />
            </label>

            <label>
              Oracle Moat ID:
              <input
                type='text'
                name='oracleMoatId'
                value={formData.oracleMoatId}
                onChange={handleChange}
                id='oracleMoatId'
              />
            </label>

            <label>
              Lead ID:
              <input
                type='text'
                name='leadId'
                value={formData.leadId}
                onChange={handleChange}
                id='leadId'
              />
            </label>
          </div>

          {/* Buttons */}
          <div className='button-container'>
            <button type='submit' id='btn-submit' className='class-btn-submit'>
              Submit
            </button>
            <button
              type='button'
              id='btn-reset'
              className='class-btn-reset'
              onClick={handleResetForm}
            >
              Reset Form
            </button>
          </div>
        </form>

        {/* Modal Component */}
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          message={modalMessage}
        />
      </div>
    </>
  )
}

export default ContactForm
