import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Typography,
} from "@material-tailwind/react";
import Sidebar from "../../components/Sidebar";
import UserInfo from "../../components/UserInfo";
const Settings = () => {
  const data = [
    {
      label: "ACCOUNT",
      value: "account",
      desc: "ACCOUNT",
    },
    {
      label: "PROFILE",
      value: "profile",
      desc: <UserInfo />,
    },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 m-4">
        <Typography variant="h5" color="blue-gray">
          Settings{" "}
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          You can change your profile information and other information here.{" "}
        </Typography>
        <Tabs className="mt-10" value="html">
          <TabsHeader>
            {data.map(({ label, value }) => (
              <Tab key={value} value={value}>
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
};
export default Settings;
