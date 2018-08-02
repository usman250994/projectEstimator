import {Checkbox, FormControl, FormControlLabel, FormGroup, TextField, Typography } from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import React from 'react';
export const Backend = (props) => {
    const {
      handleChange, activeDirectoryIntegrationRequired, isBasicChattingRequiredB, isComplicatedB,
      isProperChatSolutionRequiredB, numberOfInterfacesB, requireConfigurableWorkflow, workflowLogicRequired } = props;
 
    return (
        <div className="user-other-details">
            
             <ExpansionPanel defaultExpanded={true}>
         <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
         <Typography variant="title" gutterBottom>
           Back End
      </Typography>
        </ExpansionPanelSummary>
                <ExpansionPanelDetails className="collapse-details">
                <div>
                <FormControl component="fieldset">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={activeDirectoryIntegrationRequired}
                onChange={handleChange}
                name="activeDirectoryIntegrationRequired"
                color="primary"
              />
            }
            label="Active Directory Integration Required"
          />
          </FormGroup>
          </FormControl>
          <FormControl component="fieldset">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={isBasicChattingRequiredB}
                onChange={handleChange}
                name="isBasicChattingRequiredB"
                color="primary"
              />
            }
            label="Is Basic Chatting Required"
          />
          </FormGroup>
          </FormControl>
          <FormControl component="fieldset">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={isComplicatedB}
                onChange={handleChange}
                name="isComplicatedB"
                color="primary"
              />
            }
            label="Is Complicated"
          />
          </FormGroup>
          </FormControl>
          <FormControl component="fieldset">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={isProperChatSolutionRequiredB}
                onChange={handleChange}
                name="isProperChatSolutionRequiredB"
                color="primary"
              />
            }
            label="Is Proper Chat Solution Required"
          />
          </FormGroup>
          </FormControl>
          <FormControl component="fieldset">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={requireConfigurableWorkflow}
                onChange={handleChange}
                name="requireConfigurableWorkflow"
                color="primary"
              />
            }
            label="Require Configurable Workflow"
          />
          </FormGroup>
          </FormControl>
          <FormControl component="fieldset">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={workflowLogicRequired}
                onChange={handleChange}
                name="workflowLogicRequired"
                color="primary"
              />
            }
            label="Work Flow Logic Required"
          />
          </FormGroup>
          </FormControl>

        <TextField
          label="Number of Interfaces"  
          value={numberOfInterfacesB}
          onChange={handleChange}
          name="numberOfInterfacesB"
          margin="normal"
        />
      
     
      </div>

            </ExpansionPanelDetails>
              </ExpansionPanel>
        </div>

    )
};
export default Backend;

