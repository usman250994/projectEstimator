import {Checkbox, FormControl, FormControlLabel, FormGroup, Typography } from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import React from 'react';
export const AdditionalFeatures = (props) => {
    const {
      handleChange,
      isAnyCMSRequired,
      oneWayThirdPartyIntegrationRequired,
      twoWayThirdPartyIntegrationRequired,
    } = props;
    return (
        <div className="user-other-details">
             <ExpansionPanel defaultExpanded={true}>
         <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
         <Typography variant="title" gutterBottom={true}>
      Additional Features
      </Typography>
        </ExpansionPanelSummary>
                <ExpansionPanelDetails className="collapse-details">
                <div>
        <FormControl component="fieldset">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={oneWayThirdPartyIntegrationRequired}
                  onChange={handleChange}
                  name="oneWayThirdPartyIntegrationRequired"
                  color="primary"
                />
              }
              label="One Way Third Party Integration Required"
            />
          </FormGroup>
        </FormControl>

        <FormControl component="fieldset">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isAnyCMSRequired}
                  onChange={handleChange}
                  name="isAnyCMSRequired"
                  color="primary"
                />
              }
              label="Is Any CMS Required"
            />
          </FormGroup>
        </FormControl>
        <FormControl component="fieldset">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={twoWayThirdPartyIntegrationRequired}
                  onChange={handleChange}
                  name="twoWayThirdPartyIntegrationRequired"
                  color="primary"
                />
              }
              label="Two Way Third Party Integration Required"
            />
          </FormGroup>
        </FormControl>
        </div>
            </ExpansionPanelDetails>
              </ExpansionPanel>
        </div>

    )
};
export default AdditionalFeatures;
