import React from "react";
import { LeaveRequestService } from "./leave-request.service";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import { leaveRequestStyles } from "./leave-requst.style";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import { AddRequest } from "./add-request/add-request";
import { LeaveRequestList } from "./request-list/request-list";
import { USER_ROLES } from "../../globals";

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {}
      {value === index && children}
    </div>
  );
}

export function LeaveRequest() {
  const service = LeaveRequestService;
  const initState = {
    parentTab: 0,
    childTab: 0,
  };
  const classes = leaveRequestStyles();
  const [state, setState] = React.useState(initState);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setState({ ...state, parentTab: newValue });
  };
  const handleChildChange = (
    event: React.ChangeEvent<{}>,
    newValue: number
  ) => {
    setState({ ...state, childTab: newValue });
  };
  return (
    <div>
      <AppBar position="static">
        <Tabs value={state.parentTab} onChange={handleChange} centered={true}>
          <Tab label="Outstation Leave" />
          <Tab label="Casual Leave" />
          <Tab label="Sick Report" />
          <Tab label="Short Leave" />
          <Tab label="Night Off" />
        </Tabs>
      </AppBar>
      <div className={classes.childTabsContainer}>
        <Tabs
          orientation="vertical"
          value={state.childTab}
          onChange={handleChildChange}
          className={classes.childTabHeader}
        >
          {Number(localStorage.getItem("role")) != USER_ROLES.ADMIN
            ? [
                <Tab label="Approved" className={classes.childTab} />,
                <Tab label="Declined" className={classes.childTab} />,
                <Tab label="Pending" className={classes.childTab} />,
                <Tab label="All" className={classes.childTab} />,
                <Tab icon={<AddIcon />} className={classes.childTab} />,
              ]
            : [
                <Tab label="Course Officer" className={classes.childTab} />,
                <Tab label="JOTO" className={classes.childTab} />,
                <Tab label="Dean" className={classes.childTab} />,
                <Tab label="Captain Training" className={classes.childTab} />,
                <Tab label="Deputy Commandant" className={classes.childTab} />,
              ]}
        </Tabs>
        <div className={classes.childTabContent}>
          {Number(localStorage.getItem("role")) != USER_ROLES.ADMIN
            ? service.tabs.map((item, idx) => {
                return (
                  <TabPanel value={state.parentTab} index={idx}>
                    {state.childTab !== 4 ? (
                      <LeaveRequestList
                        status={state.childTab}
                        tab={state.parentTab}
                      />
                    ) : (
                      <AddRequest tab={state.parentTab} />
                    )}
                  </TabPanel>
                );
              })
            : service.tabs.map((item, idx) => {
                return (
                  <TabPanel value={state.parentTab} index={idx}>
                    <LeaveRequestList
                      status={state.childTab}
                      tab={state.parentTab}
                    />
                  </TabPanel>
                );
              })}
          {}
          {/* <TabPanel value={state.parentTab} index={0}>
            {state.childTab !== 4 ? (
              <LeaveRequestList status={state.childTab} />
            ) : (
              <AddRequest tab={state.parentTab} />
            )}
          </TabPanel>
          <TabPanel value={state.parentTab} index={1}>
            {state.childTab !== 4 ? (
              <LeaveRequestList status={state.childTab} />
            ) : (
              <AddRequest tab={state.parentTab} />
            )}
          </TabPanel>
          <TabPanel value={state.parentTab} index={2}>
            {state.childTab !== 4 ? (
              <LeaveRequestList status={state.childTab} />
            ) : (
              <AddRequest tab={state.parentTab} />
            )}
          </TabPanel>
          <TabPanel value={state.parentTab} index={3}>
            {state.childTab !== 4 ? (
              <LeaveRequestList status={state.childTab} />
            ) : (
              <AddRequest tab={state.parentTab} />
            )}
          </TabPanel>
          <TabPanel value={state.parentTab} index={4}>
            {state.childTab !== 4 ? (
              <LeaveRequestList status={state.childTab} />
            ) : (
              <AddRequest tab={state.parentTab} />
            )}
          </TabPanel> */}
        </div>
      </div>
    </div>
  );
}
