import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

import * as styles from './styles.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaCodeBranch, FaEnvelope, FaLinkedin } from 'react-icons/fa';
// import {} from '@react'

// const FaGithub = faEnvelope;

const SecondPage: React.FC = () => (
  <Layout currentPage="contact">
    <Seo title="contact" />
    <h1>Contact</h1>
    <ul className={styles.contactList}>
      <ul>
        <li>
        <FaEnvelope size={48} />
        </li>
        <li>
          <a href="mailto:aryageza@gmail.com">aryageza@gmail.com</a>
        </li>
      </ul>
      <ul>
        <li>
          <FaCodeBranch size={48} />
        </li>
        <li>
          <a href="https://github.com/cookies-xor-cream/">cookies-xor-cream</a>
        </li>
      </ul>
      <ul>
        <li>
        <FaLinkedin size={48} />
        </li>
        <li>
          <a href="https://www.linkedin.com/in/arya-gerami-zadegan-927048203/">Arya Gerami Zadegan</a>
        </li>
      </ul>
    </ul>
  </Layout>
)

export default SecondPage
