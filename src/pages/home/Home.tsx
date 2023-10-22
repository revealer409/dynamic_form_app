import React from "react";
import AppLayout from "../../layouts/AppLayout";
import "../../assets/css/global.css";
import DynamicForm from "../../components/form/DynamicForm";
const Home: React.FC = () => {

  return (
    <AppLayout isStickyHeader pageTitle="Home">
      <DynamicForm />
      {/* Home page content */}
      <p className="mt-5">
        
      </p>
    </AppLayout>
  );
};

export default Home;
