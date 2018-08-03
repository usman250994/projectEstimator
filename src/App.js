
import { Typography } from '@material-ui/core';
import axios from 'axios';
import { Form, withFormik } from 'formik';
import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { AdditionalFeatures, Backend, ContainedButtons, FrontEnd, Mobile } from './components';
import {fetchHours} from './actions';


class App extends React.Component {
 render() {

    const { handleChange, values, hours } = this.props;
    const {  isAnyCMSRequired, oneWayThirdPartyIntegrationRequired, twoWayThirdPartyIntegrationRequired, activeDirectoryIntegrationRequired, 
         isBasicChattingRequiredB, isComplicatedB, isProperChatSolutionRequiredB, numberOfInterfacesB, requireConfigurableWorkflow, workflowLogicRequired, isAdminPanelRequired,
        isBasicChattingRequiredF, isComplicatedF,  isProperChatSolutionRequiredF, isConsumerFrontEndRequired, numberOfInterfacesF, isAndroidAppRequired, isBasicChattingRequiredM, 
        isComplicatedM, isIPhoneAppRequired, isLocationBasedWorkRequired, isOfflineSupportRequired, isProperChatSolutionRequiredM, needLowCostSolution, numberOfInterfacesM 
         } =   values
        const {additionalFeatures, mobile, frontend, backend }= hours;
         return (
        <Form>

          <div className="">
            <Typography variant="headline" gutterBottom={true} >
              LOE Request
          </Typography>
          </div>
              <div className="App">
          <Backend
            handleChange={handleChange}
            activeDirectoryIntegrationRequired={activeDirectoryIntegrationRequired}
            isBasicChattingRequiredB={isBasicChattingRequiredB}
            isComplicatedB={isComplicatedB}
            isProperChatSolutionRequiredB={isProperChatSolutionRequiredB}
            numberOfInterfacesB={numberOfInterfacesB}
            requireConfigurableWorkflow={requireConfigurableWorkflow}
            workflowLogicRequired={workflowLogicRequired}
/>
          <FrontEnd 
          handleChange={handleChange}
          isConsumerFrontEndRequired={isConsumerFrontEndRequired}
          isAdminPanelRequired={isAdminPanelRequired}
          isBasicChattingRequiredF={isBasicChattingRequiredF}
          isComplicatedF={isComplicatedF}
          isProperChatSolutionRequiredF={isProperChatSolutionRequiredF}
          numberOfInterfacesF={numberOfInterfacesF}
          />
          <Mobile 
          handleChange={handleChange}
          isAndroidAppRequired={isAndroidAppRequired}
          isBasicChattingRequiredM={isBasicChattingRequiredM}
          isComplicatedM={isComplicatedM}
          isIPhoneAppRequired={isIPhoneAppRequired}
          isLocationBasedWorkRequired={isLocationBasedWorkRequired}
          isOfflineSupportRequired={isOfflineSupportRequired}
          isProperChatSolutionRequiredM={isProperChatSolutionRequiredM}
          needLowCostSolution={needLowCostSolution}
          numberOfInterfacesM={numberOfInterfacesM}
          />
           <AdditionalFeatures 
          handleChange={handleChange}
          isAnyCMSRequired={isAnyCMSRequired}
          oneWayThirdPartyIntegrationRequired={oneWayThirdPartyIntegrationRequired}
          twoWayThirdPartyIntegrationRequired={twoWayThirdPartyIntegrationRequired}
          />
         <ContainedButtons/>
      </div>
      <div>
      
      <label>Additional Features:</label> {additionalFeatures} <label>Mobile:</label> {mobile} <label>Frontend:</label> {frontend} <label>Backend:</label> {backend}
        
      </div>
        </Form>
      
    );
  }
}

const mapStateToProps = state => ({
  hours: state.LOEFormReducer.LOEHours,
});

const mapDispatchToProps = dispatch => ({
  fetchHours: (values) => dispatch(fetchHours(values)),
})

export default  connect(mapStateToProps, mapDispatchToProps)(withFormik(
  {
    mapPropsToValues: props => ({
      isAnyCMSRequired: false,
      oneWayThirdPartyIntegrationRequired: false,
      twoWayThirdPartyIntegrationRequired: false,
      activeDirectoryIntegrationRequired: false,
      isBasicChattingRequiredB: false,
      isComplicatedB: false,
      isProperChatSolutionRequiredB: false,
      numberOfInterfacesB: '',
      requireConfigurableWorkflow: false,
      workflowLogicRequired: false,
      isAdminPanelRequired: false,
      isBasicChattingRequiredF: false,
      isComplicatedF: false,
      isProperChatSolutionRequiredF: false,
      isConsumerFrontEndRequired: false,
      numberOfInterfacesF: '',
      isAndroidAppRequired: false,
      isBasicChattingRequiredM: false,
      isComplicatedM: false,
      isIPhoneAppRequired: false,
      isLocationBasedWorkRequired: false,
      isOfflineSupportRequired: false,
      isProperChatSolutionRequiredM: false,
      needLowCostSolution: false,
      numberOfInterfacesM: '',
    }),
    handleSubmit: (values, { props }) => {
      const req = {
        additionalFeatures: {
          IsAnyCMSRequired: values.isAnyCMSRequired,
          OneWayThirdPartyIntegrationRequired: values.oneWayThirdPartyIntegrationRequired,
          TwoWayThirdPartyIntegrationRequired: values.twoWayThirdPartyIntegrationRequired,
        },
        backend: {
          ActiveDirectoryIntegrationRequired: values.activeDirectoryIntegrationRequired,
          IsBasicChattingRequired: values.isBasicChattingRequiredB,
          IsComplicated: values.isComplicatedB,
          IsProperChatSolutionRequired: values.isProperChatSolutionRequiredB,
          NumberOfInterfaces: values.numberOfInterfacesB,
          RequireConfigurableWorkflow: values.requireConfigurableWorkflow,
          WorkflowLogicRequired: values.workflowLogicRequired
        },
        frontend: {
          IsAdminPanelRequired: values.isAdminPanelRequired,
          IsBasicChattingRequired: values.isBasicChattingRequiredF,
          IsComplicated: values.isComplicatedF,
          IsConsumerFrontendRequired: values.isConsumerFrontEndRequired,
          IsProperChatSolutionRequired: values.isProperChatSolutionRequiredF,
          NumberOfInterfaces: values.numberOfInterfacesF,
        },
        mobile: {
          IsAndroidAppRequired: values.isAndroidAppRequired,
          IsBasicChattingRequired: values.isBasicChattingRequiredM,
          IsComplicated: values.isComplicatedM,
          IsIPhoneAppRequired: values.isIPhoneAppRequired,
          IsLocationBasedWorkRequired: values.isLocationBasedWorkRequired,
          IsOfflineSupportRequired: values.isOfflineSupportRequired,
          IsProperChatSolutionRequired: values.isProperChatSolutionRequiredM,
          NeedLowCostSolution: values.needLowCostSolution,
          NumberOfInterfaces: values.numberOfInterfacesM,
       },
      }
      axios.post(`http://172.16.0.155:4000/completeForm`, req )
        .then(res => {
         console.log(res.data);
         props.fetchHours(res.data);
        })

    }
  })(App));
