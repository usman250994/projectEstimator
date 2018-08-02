import {Checkbox, FormControl, FormControlLabel, FormGroup, TextField, Typography } from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import React from 'react';
export const FrontEnd = (props) => {
    const {
      handleChange,
      isConsumerFrontEndRequired,
      isAdminPanelRequired,
      isBasicChattingRequiredF,
      isComplicatedF,
      isProperChatSolutionRequiredF,
      numberOfInterfacesF,
    } = props;
    return (
        <div className="user-other-details">
             <ExpansionPanel defaultExpanded={true}>
         <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
         <Typography variant="title" gutterBottom={true}>
     Front End
      </Typography>
        </ExpansionPanelSummary>
                <ExpansionPanelDetails className="collapse-details">
                <div>
                <FormControl component="fieldset">
        <FormGroup>
         
          <FormControlLabel
            control={
              <Checkbox
                checked={isConsumerFrontEndRequired}
                onChange={handleChange}
                name="isConsumerFrontEndRequired"
                color="primary"
              />
            }
            label="Consumer FrontEnd Required"
          />
        </FormGroup>
      </FormControl>

        <FormControl component="fieldset">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isAdminPanelRequired}
                  onChange={handleChange}
                  name="isAdminPanelRequired"
                  color="primary"
                />
              }
              label="Admin Panel Required"
            />
          </FormGroup>
        </FormControl>

          <FormControl component="fieldset">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isBasicChattingRequiredF}
                  onChange={handleChange}
                  name="isBasicChattingRequiredF"
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
                  checked={isComplicatedF}
                  onChange={handleChange}
                  name="isComplicatedF"
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
                  checked={isProperChatSolutionRequiredF}
                  onChange={handleChange}
                  name="isProperChatSolutionRequiredF"
                  color="primary"
                />
              }
              label="Is Proper Chat Solution Required"
            />
          </FormGroup>
        </FormControl>


        <TextField
          label="Number of Interfaces"  
          value={numberOfInterfacesF}
          onChange={handleChange}
          name="numberOfInterfacesF"
          margin="normal"
        />
        </div>
            </ExpansionPanelDetails>
              </ExpansionPanel>
        </div>

    )
};
export default FrontEnd;
