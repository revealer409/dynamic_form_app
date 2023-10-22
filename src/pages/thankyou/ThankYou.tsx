import React from "react";
import AppLayout from "../../layouts/AppLayout";
import { useNavigate } from "react-router-dom";
import "../../assets/css/global.css";
import ThankYouCard from "../../components/form/ThankYouCard";

const ThankYou: React.FC = () => {
  return (
    <AppLayout isStickyHeader pageTitle="Thank You">
      <ThankYouCard />
    </AppLayout>
  );
};

export default ThankYou;
