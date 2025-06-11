import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import PortfolioHomepage from "pages/portfolio-homepage";
// import ProjectDetailModal from "pages/project-detail-modal";
// import ContactProjectInquiryForm from "pages/contact-project-inquiry-form";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          <Route path="/" element={<PortfolioHomepage />} />
          <Route path="/portfolio-homepage" element={<PortfolioHomepage />} />
          {/* <Route path="/project-detail-modal" element={<ProjectDetailModal />} /> */}
          {/* <Route path="/contact-project-inquiry-form" element={<ContactProjectInquiryForm />} /> */}
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;