import React from "react";
import Feat from "./feat";
import Features from './features'
import { Wrap, WrapItem, Center, Container} from "@chakra-ui/react"
import styles from '../../styles/Features.module.css'

const FeaturesIndex = () => {
  return (
    <div className={styles.tarjetas}>
      <Features />
      <div className="line"></div>
      <Feat />
    </div>
  )

};

export default FeaturesIndex;
