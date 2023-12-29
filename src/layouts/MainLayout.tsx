/* eslint-disable react/jsx-no-undef */
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Card,
  Chip,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Typography,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/24/solid";
import React, { ReactNode } from "react";
import { useDispatch } from "../redux/store";
import { setUserState } from "../redux/slice/persist";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = React.useState(1);
  const dispatch = useDispatch();
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  const userLogout = () => {
    dispatch(setUserState(false));
  };
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "20%" }}>
        <Card
          className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 flex flex-col bg-zinc-200"
          placeholder={undefined}
        >
          <div className="mb-2 p-4">
            <Typography variant="h5" color="blue-gray" placeholder={undefined}>
              Sidebar
            </Typography>
          </div>

          <List className="flex flex-col" placeholder={undefined}>
            <Accordion
              placeholder={undefined}
              open={open === 1}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    open === 1 ? "rotate-180" : ""
                  }`}
                />
              }
            >
              <ListItem
                placeholder={undefined}
                className="p-0"
                selected={open === 1}
              >
                <AccordionHeader
                  placeholder={"demo"}
                  onClick={() => handleOpen(1)}
                  className="border-b-0 p-3"
                >
                  <ListItemPrefix placeholder={undefined}>
                    <PresentationChartBarIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  <Typography
                    placeholder={undefined}
                    color="blue-gray"
                    className="mr-auto font-normal"
                  >
                    Dashboard
                  </Typography>
                </AccordionHeader>
              </ListItem>
              {/* <AccordionBody className="py-1">
                <List placeholder={undefined} className="p-0">
                  <ListItem placeholder={undefined}>
                    <ListItemPrefix placeholder={undefined}>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Analytics
                  </ListItem>
                  <ListItem placeholder={undefined}>
                    <ListItemPrefix placeholder={undefined}>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Reporting
                  </ListItem>
                  <ListItem placeholder={undefined}>
                    <ListItemPrefix placeholder={undefined}>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Projects
                  </ListItem>
                </List>
              </AccordionBody> */}
            </Accordion>
            <Accordion
              placeholder={undefined}
              open={open === 2}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    open === 2 ? "rotate-180" : ""
                  }`}
                />
              }
            >
              <ListItem
                placeholder={undefined}
                className="p-0"
                selected={open === 2}
              >
                <AccordionHeader
                  placeholder={undefined}
                  onClick={() => handleOpen(2)}
                  className="border-b-0 p-3"
                >
                  {/* <ListItemPrefix>
                    <ShoppingBagIcon className="h-5 w-5" />
                  </ListItemPrefix> */}
                  <Typography
                    placeholder={undefined}
                    color="blue-gray"
                    className="mr-auto font-normal"
                  >
                    E-Commerce
                  </Typography>
                </AccordionHeader>
              </ListItem>
              {/* <AccordionBody className="py-1">
                <List placeholder={undefined} className="p-0">
                  <ListItem placeholder={undefined}>Orders</ListItem>
                  <ListItem placeholder={undefined}>Products</ListItem>
                </List>
              </AccordionBody> */}
            </Accordion>
            <ListItem placeholder={undefined}>
              Inbox
              <ListItemSuffix placeholder={undefined}>
                <Chip
                  value="14"
                  size="sm"
                  variant="ghost"
                  color="blue-gray"
                  className="rounded-full"
                />
              </ListItemSuffix>
            </ListItem>
            <ListItem placeholder={undefined}>Profile</ListItem>
            <ListItem placeholder={undefined}>Settings</ListItem>
            <ListItem placeholder={undefined} onClick={userLogout}>
              Log Out
            </ListItem>
          </List>
        </Card>
      </div>

      <div>
        <div>Main content</div>
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
