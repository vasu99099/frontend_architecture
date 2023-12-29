import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../redux/store";
import { ThemeProvider } from "@material-tailwind/react";
// Providers
// import ThemeProvider from "theme";
// import SettingsProvider from "./SettingsContext";
// import AppointmentsProvider from "./AppointmentsContext";
// import AppointmentCalendarContext from "./AppointmentCalendarContext";
// import { GAProvider } from "./AnalyticsContext";
// import AppointmentDetailsProvider from "./AppointmentDetailsContext";
// import ControlCenterProvider from "./ControlCenter";

// utils
// import { store } from "~/redux/store";

type Props = {
  children: React.ReactNode;
};
// const trackingId = process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID || "";

const Providers = ({ children }: Props) => {
  return (
    <BrowserRouter>
      <ReduxProvider store={store}>
        <ThemeProvider>{children}</ThemeProvider>
      </ReduxProvider>
    </BrowserRouter>
  );
};

export default Providers;
