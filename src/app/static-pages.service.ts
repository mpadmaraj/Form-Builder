import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaticPagesService {

  constructor() { }

  basicInfoPage:any = {
    "name": "Basic Info",
    "pageType": "Custom",
    "pageOrder": "10",
    "minTime": "5",
    "maxTime": "15",
    "minMaxTimeUnit": "Minutes",
    "leftPanel": [],
    "rightPanel": [
      {
        apiName: "",
        description: "",
        label: "Select a Program",
        type: "Header"
      },
      {
        apiName: "",
        description: "",
        label: "Degree Program",
        type: "Academic Program"
      },
      {
        apiName: "",
        description: "",
        label: "Applicant Information",
        type: "Header"
      },
      {
        apiName: "First_Name__c",
        description: "",
        label: "First Name",
        type: "Field"
      },
      {
        apiName: "Middle_Name__c",
        description: "",
        label: "Middle Name (Enter X if none)",
        type: "Field"
      },
      {
        apiName: "Last_Name__c",
        description: "",
        label: "Last Name",
        type: "Field"
      },
      {
        apiName: "Maiden__c",
        description: "",
        label: "Other Last Names Used",
        type: "Field"
      },
      {
        apiName: "Date_of_Birth__c",
        description: "",
        label: "Birth Date (MM/DD/YYYY)",
        type: "Field"
      },
      {
        apiName: "Mobile_Phone__c",
        description: "",
        label: "Mobile Phone",
        type: "Field"
      },
      {
        apiName: "Home_Phone__c",
        description: "",
        label: "Home Phone",
        type: "Field"
      },
      {
        apiName: "Email_Address__c",
        description: "",
        label: "Email Address",
        type: "Field"
      },
      {
        apiName: "Is_English_1st__c",
        description: "",
        label: "Is English your first language?",
        type: "Field"
      },
      {
        apiName: "",
        description: "",
        label: "Current Mailing Address",
        type: "Header"
      },
      {
        apiName: "Address_Line_1__c",
        description: "",
        label: "Address Line 1",
        type: "Google Address Autocomplete"
      },
      {
        apiName: "Address_Line_2__c",
        description: "",
        label: "Address Line 2",
        type: "Field"
      },
      {
        apiName: "City__c",
        description: "",
        label: "City",
        type: "Field"
      },
      {
        apiName: "State_Province__c",
        description: "",
        label: "State",
        type: "Auto Complete"
      },
      {
        apiName: "Zip_Postal_Code__c",
        description: "",
        label: "Zip Code",
        type: "Field"
      },
      {
        apiName: "Country__c",
        description: "",
        label: "Country",
        type: "Field"
      },
      {
        apiName: "Same_as_Permanent__c",
        description: "My permanent address is different than my mailing address",
        label: "My Permanent Address is different than my mailing address",
        type: "Field"
      },
      {
        apiName: "",
        description: "",
        label: "Citizenship &amp; Ethnicity",
        type: "Header"
      },
      {
        apiName: "Citizenship_Status__c",
        description: "",
        label: "Citizenship Status",
        type: "Field"
      },
      {
        apiName: "Birthplace__c",
        description: "",
        label: "Country of Birth",
        type: "Field"
      },
      {
        apiName: "",
        description: "The United States Office of Civil Rights, under Title VI, requests the following information from higher education institutions. The information is confidential.",
        label: "Race/Ethnicity.",
        type: "Header"
      },
      {
        apiName: "Ethnicity_multi__c",
        description: "",
        label: "Race",
        type: "Field"
      },
      {
        apiName: "Hispanic_Latino__c",
        description: "",
        label: "Are you Hispanic/Latino?",
        type: "Radio"
      },
      {
        apiName: "",
        description: "",
        label: "Military History",
        type: "Header"
      },
      {
        apiName: "",
        description: "",
        label: "Financial Sources",
        type: "Header"
      },
      {
        apiName: "Financing_Source__c",
        description: "",
        label: "How do you plan to finance your education?",
        type: "Field"
      },
      {
        apiName: "",
        description: "",
        label: "Other Questions",
        type: "Header"
      },
      {
        apiName: "How_Heard__c",
        description: "",
        label: "How did you first hear of the online graduate programs at Anna Maria College?",
        type: "Field"
      },
      {
        apiName: "Specify_if_Other_1__c",
        description: "",
        label: "Please specify if \&quot;Other",
        type: "Field"
      },
      {
        apiName: "Influencing_Factors__c",
        description: "",
        label: "Significant factors influencing my application to Anna Maria College",
        type: "Field"
      },
      {
        apiName: "Specify_if_Other_2__c",
        description: "",
        label: "Please specify if \&quot;Other",
        type: "Field"
      },
      {
        apiName: "",
        description: "To get started, please select your program of interest and complete the required fields to continue. After completing this first section, you may complete the application process in any order you desire.",
        label: "Basic Information text-1",
        type: "Long Display Field"
      },
      {
        apiName: "",
        description: "Once you have completed the required fields, we will contact you by phone and email to assist you with the online application. You will be able to opt-out or unsubscribe at any time.",
        label: "Basic Information text-2",
        type: "Long Display Field"
      },
      {
        apiName: "",
        description: "",
        label: "Permanent Mailing Address",
        type: "Header"
      },
      {
        apiName: "Permanent_Street_Address_1__c",
        description: "",
        label: "Address Line 1",
        type: "Google Address Autocomplete"
      },
      {
        apiName: "Permanent_Street_Address_2__c",
        description: "",
        label: "Address Line 2",
        type: "Field"
      },
      {
        apiName: "Permanent_City__c",
        description: "",
        label: "City",
        type: "Field"
      },
      {
        apiName: "Permanent_State_Province__c",
        description: "",
        label: "State/Province",
        type: "Auto Complete"
      },
      {
        apiName: "Permanent_Zip_Code__c",
        description: "",
        label: "Zip/Postal Code",
        type: "Field"
      },
      {
        apiName: "Permanent_Country__c",
        description: "",
        label: "Country",
        type: "Field"
      },
      {
        apiName: "Citizenship__c",
        description: "",
        label: "Country of Citizenship",
        type: "Field"
      },
      {
        apiName: "Affiliated_with_US_Military__c",
        description: "",
        label: "Are you affiliated with the U.S. military?",
        type: "Radio"
      },
      {
        apiName: "Military_Status__c",
        description: "",
        label: "Military Status",
        type: "Field"
      },
      {
        apiName: "Duty_Type__c",
        description: "",
        label: "Anticipated status at the time you enroll",
        type: "Field"
      },
      {
        apiName: "Military_Branch_Picklist__c",
        description: "",
        label: "Branch of Service",
        type: "Field"
      },
      {
        apiName: "Military_Service_Start_Date__c",
        description: "",
        label: "Military Start Date",
        type: "Field"
      },
      {
        apiName: "Military_Separation_Date__c",
        description: "",
        label: "Military Separation Date",
        type: "Field"
      },
      {
        apiName: "Tuition_Reimbursement_Amount__c",
        description: "",
        label: "Employer tuition reimbursement amount",
        type: "Field"
      },
      {
        apiName: "Transfer_Credit__c",
        description: "",
        label: "Do you wish to transfer any credits into Anna Maria College?",
        type: "Radio"
      },
      {
        apiName: "",
        className: "red-border",
        description: "",
        Do_not_show_on_PDF: "TRUE",
        Field_Format: "",
        handle: true,
        headingType: "H3",
        Hide_on_Finalize: "TRUE",
        label: "Select a Program",
        Left_Panel_Styles: "",
        regex: "",
        toggle: false,
        type: "Header"
      },
      {
        apiName: "",
        className: "red-border",
        description: "",
        Do_not_show_on_PDF: "FALSE",
        Field_Format: "",
        handle: true,
        headingType: "",
        Hide_on_Finalize: "FALSE",
        label: "Degree Program",
        Left_Panel_Styles: "",
        regex: "",
        toggle: false,
        type: "Academic Program"
      },
      {
        apiName: "",
        className: "red-border",
        description: "",
        Do_not_show_on_PDF: "TRUE",
        Field_Format: "",
        handle: true,
        headingType: "H3",
        Hide_on_Finalize: "TRUE",
        label: "Applicant Information",
        Left_Panel_Styles: "",
        regex: "",
        toggle: false,
        type: "Header"
      },
      {
        apiName: "First_Name__c",
        className: "red-border",
        description: "",
        Do_not_show_on_PDF: "FALSE",
        Field_Format: "",
        handle: true,
        headingType: "",
        Hide_on_Finalize: "FALSE",
        label: "First Name",
        Left_Panel_Styles: "",
        regex: "",
        toggle: false,
        type: "Field"
      },
      {
        apiName: "Middle_Name__c",
        className: "red-border",
        description: "",
        Do_not_show_on_PDF: "FALSE",
        Field_Format: "",
        handle: true,
        headingType: "",
        Hide_on_Finalize: "FALSE",
        label: "Middle Name (Enter X if none)",
        Left_Panel_Styles: "",
        regex: "",
        toggle: false,
        type: "Field"
      },
      {
        apiName: "Last_Name__c",
        className: "red-border",
        description: "",
        Do_not_show_on_PDF: "FALSE",
        Field_Format: "",
        handle: true,
        headingType: "",
        Hide_on_Finalize: "FALSE",
        label: "Last Name",
        Left_Panel_Styles: "",
        regex: "",
        toggle: false,
        type: "Field"
      },
      {
        apiName: "Maiden__c",
        className: "red-border",
        description: "",
        Do_not_show_on_PDF: "FALSE",
        Field_Format: "",
        handle: true,
        headingType: "",
        Hide_on_Finalize: "TRUE",
        label: "Other Last Names Used",
        Left_Panel_Styles: "",
        regex: "",
        toggle: false,
        type: "Field"
      },
      {
        apiName: "Date_of_Birth__c",
        className: "red-border",
        description: "",
        Do_not_show_on_PDF: "FALSE",
        Field_Format: "",
        handle: true,
        headingType: "",
        Hide_on_Finalize: "FALSE",
        label: "Birth Date (MM/DD/YYYY)",
        Left_Panel_Styles: "",
        regex: "",
        toggle: false,
        type: "Field"
      },
      {
        apiName: "Mobile_Phone__c",
        className: "red-border",
        description: "",
        Do_not_show_on_PDF: "FALSE",
        Field_Format: "PHONE",
        handle: true,
        headingType: "",
        Hide_on_Finalize: "FALSE",
        label: "Mobile Phone",
        Left_Panel_Styles: "",
        regex: "",
        toggle: false,
        type: "Field"
      },
      {
        apiName: "Home_Phone__c",
        className: "red-border",
        description: "",
        Do_not_show_on_PDF: "FALSE",
        Field_Format: "PHONE",
        handle: true,
        headingType: "",
        Hide_on_Finalize: "FALSE",
        label: "Home Phone",
        Left_Panel_Styles: "",
        regex: "",
        toggle: false,
        type: "Field"
      },
      {
        apiName: "Email_Address__c",
        className: "red-border",
        description: "",
        Do_not_show_on_PDF: "FALSE",
        Field_Format: "",
        handle: true,
        headingType: "",
        Hide_on_Finalize: "FALSE",
        label: "Email Address",
        Left_Panel_Styles: "",
        regex: "",
        toggle: false,
        type: "Field"
      },
      {
        apiName: "Is_English_1st__c",
        className: "red-border",
        description: "",
        Do_not_show_on_PDF: "FALSE",
        Field_Format: "",
        handle: true,
        headingType: "",
        Hide_on_Finalize: "FALSE",
        label: "Is English your first language?",
        Left_Panel_Styles: "",
        regex: "",
        toggle: false,
        type: "Field"
      },
      {
        apiName: "",
        className: "red-border",
        description: "",
        Do_not_show_on_PDF: "TRUE",
        Field_Format: "",
        handle: true,
        headingType: "H3",
        Hide_on_Finalize: "TRUE",
        label: "Current Mailing Address",
        Left_Panel_Styles: "",
        regex: "",
        toggle: false,
        type: "Header"
      },
      {
        apiName: "Address_Line_1__c",
        className: "red-border",
        description: "",
        Do_not_show_on_PDF: "FALSE",
        Field_Format: "",
        handle: true,
        headingType: "",
        Hide_on_Finalize: "FALSE",
        label: "Address Line 1",
        Left_Panel_Styles: "",
        regex: "",
        toggle: false,
        type: "Google Address Autocomplete"
      },
      {
        apiName: "Address_Line_2__c",
        className: "red-border",
        description: "",
        Do_not_show_on_PDF: "FALSE",
        Field_Format: "",
        handle: true,
        headingType: "",
        Hide_on_Finalize: "FALSE",
        label: "Address Line 2",
        Left_Panel_Styles: "",
        regex: "",
        toggle: false,
        type: "Field"
      },
      {
        apiName: "City__c",
        className: "red-border",
        description: "",
        Do_not_show_on_PDF: "FALSE",
        Field_Format: "",
        handle: true,
        headingType: "",
        Hide_on_Finalize: "FALSE",
        label: "City",
        Left_Panel_Styles: "",
        regex: "",
        toggle: false,
        type: "Field"
      },
      {
        apiName: "State_Province__c",
        className: "red-border",
        description: "",
        Do_not_show_on_PDF: "FALSE",
        Field_Format: "",
        handle: true,
        headingType: "",
        Hide_on_Finalize: "FALSE",
        label: "State",
        Left_Panel_Styles: "",
        regex: "",
        toggle: false,
        type: "Auto Complete"
      },
      {
        apiName: "Zip_Postal_Code__c",
        className: "red-border",
        description: "",
        Do_not_show_on_PDF: "FALSE",
        Field_Format: "",
        handle: true,
        headingType: "",
        Hide_on_Finalize: "FALSE",
        label: "Zip Code",
        Left_Panel_Styles: "",
        regex: "",
        toggle: false,
        type: "Field"
      },
      {
        apiName: "Country__c",
        className: "red-border",
        description: "",
        Do_not_show_on_PDF: "FALSE",
        Field_Format: "",
        handle: true,
        headingType: "",
        Hide_on_Finalize: "FALSE",
        label: "Country",
        Left_Panel_Styles: "",
        regex: "",
        toggle: false,
        type: "Field"
      },
      {
        apiName: "Same_as_Permanent__c",
        className: "red-border",
        description: "My permanent address is different than my mailing address",
        Do_not_show_on_PDF: "FALSE",
        Field_Format: "",
        handle: true,
        headingType: "",
        Hide_on_Finalize: "TRUE",
        label: "My Permanent Address is different than my mailing address",
        Left_Panel_Styles: "",
        regex: "",
        toggle: false,
        type: "Field"
      },
      {
        apiName: "",
        className: "red-border",
        description: "",
        Do_not_show_on_PDF: "TRUE",
        Field_Format: "",
        handle: true,
        headingType: "H3",
        Hide_on_Finalize: "TRUE",
        label: "Citizenship &amp; Ethnicity",
        Left_Panel_Styles: "",
        regex: "",
        toggle: false,
        type: "Header"
      },
      {
        apiName: "Citizenship_Status__c",
        className: "red-border",
        description: "",
        Do_not_show_on_PDF: "FALSE",
        Field_Format: "",
        handle: true,
        headingType: "",
        Hide_on_Finalize: "FALSE",
        label: "Citizenship Status",
        Left_Panel_Styles: "",
        regex: "",
        toggle: false,
        type: "Field"
      },
      {
        apiName: "Birthplace__c",
        className: "red-border",
        description: "",
        Do_not_show_on_PDF: "FALSE",
        Field_Format: "",
        handle: true,
        headingType: "",
        Hide_on_Finalize: "FALSE",
        label: "Country of Birth",
        Left_Panel_Styles: "",
        regex: "",
        toggle: false,
        type: "Field"
      },
      {
        apiName: "",
        className: "red-border",
        description: "The United States Office of Civil Rights, under Title VI, requests the following information from higher education institutions. The information is confidential.",
        Do_not_show_on_PDF: "TRUE",
        Field_Format: "",
        handle: true,
        headingType: "H3",
        Hide_on_Finalize: "TRUE",
        label: "Race/Ethnicity.",
        Left_Panel_Styles: "",
        regex: "",
        toggle: false,
        type: "Header"
      },
      {
        apiName: "Ethnicity_multi__c",
        className: "red-border",
        description: "",
        Do_not_show_on_PDF: "FALSE",
        Field_Format: "",
        handle: true,
        headingType: "",
        Hide_on_Finalize: "FALSE",
        label: "Race",
        Left_Panel_Styles: "",
        regex: "",
        toggle: false,
        type: "Field"
      },
      {
        apiName: "Hispanic_Latino__c",
        className: "red-border",
        description: "",
        Do_not_show_on_PDF: "FALSE",
        Field_Format: "",
        handle: true,
        headingType: "",
        Hide_on_Finalize: "FALSE",
        label: "Are you Hispanic/Latino?",
        Left_Panel_Styles: "",
        regex: "",
        toggle: false,
        type: "Radio"
      },
      {
        apiName: "",
        className: "red-border",
        description: "",
        Do_not_show_on_PDF: "TRUE",
        Field_Format: "",
        handle: true,
        headingType: "H3",
        Hide_on_Finalize: "TRUE",
        label: "Military History",
        Left_Panel_Styles: "",
        regex: "",
        toggle: false,
        type: "Header"
      },
      {
        apiName: "",
        className: "red-border",
        description: "",
        Do_not_show_on_PDF: "TRUE",
        Field_Format: "",
        handle: true,
        headingType: "H3",
        Hide_on_Finalize: "TRUE",
        label: "Financial Sources",
        Left_Panel_Styles: "",
        regex: "",
        toggle: false,
        type: "Header"
      },
      {
        apiName: "Financing_Source__c",
        className: "red-border",
        description: "",
        Do_not_show_on_PDF: "FALSE",
        Field_Format: "",
        handle: true,
        headingType: "",
        Hide_on_Finalize: "TRUE",
        label: "How do you plan to finance your education?",
        Left_Panel_Styles: "",
        regex: "",
        toggle: false,
        type: "Field"
      },
      {
        apiName: "",
        className: "red-border",
        description: "",
        Do_not_show_on_PDF: "TRUE",
        Field_Format: "",
        handle: true,
        headingType: "H3",
        Hide_on_Finalize: "TRUE",
        label: "Other Questions",
        Left_Panel_Styles: "",
        regex: "",
        toggle: false,
        type: "Header"
      },
      {
        apiName: "How_Heard__c",
        className: "red-border",
        description: "",
        Do_not_show_on_PDF: "FALSE",
        Field_Format: "",
        handle: true,
        headingType: "",
        Hide_on_Finalize: "TRUE",
        label: "How did you first hear of the online graduate programs at Anna Maria College?",
        Left_Panel_Styles: "",
        regex: "",
        toggle: false,
        type: "Field"
      },
      {
        apiName: "Specify_if_Other_1__c",
        className: "red-border",
        description: "",
        Do_not_show_on_PDF: "FALSE",
        Field_Format: "",
        handle: true,
        headingType: "",
        Hide_on_Finalize: "TRUE",
        label: "Please specify if \&quot;Other",
        Left_Panel_Styles: "",
        regex: "",
        toggle: false,
        type: "Field"
      },
      {
        apiName: "Influencing_Factors__c",
        className: "red-border",
        description: "",
        Do_not_show_on_PDF: "FALSE",
        Field_Format: "",
        handle: true,
        headingType: "",
        Hide_on_Finalize: "TRUE",
        label: "Significant factors influencing my application to Anna Maria College",
        Left_Panel_Styles: "",
        regex: "",
        toggle: false,
        type: "Field"
      },
      {
        apiName: "Specify_if_Other_2__c",
        className: "red-border",
        description: "",
        Do_not_show_on_PDF: "FALSE",
        Field_Format: "",
        handle: true,
        headingType: "",
        Hide_on_Finalize: "TRUE",
        label: "Please specify if \&quot;Other",
        Left_Panel_Styles: "",
        regex: "",
        toggle: false,
        type: "Field"
      },
      {
        apiName: "",
        className: "red-border",
        description: "To get started, please select your program of interest and complete the required fields to continue. After completing this first section, you may complete the application process in any order you desire.",
        Do_not_show_on_PDF: "TRUE",
        Field_Format: "",
        handle: true,
        headingType: "",
        Hide_on_Finalize: "TRUE",
        label: "Basic Information text-1",
        Left_Panel_Styles: "Left-Panel-Desc-Large",
        regex: "",
        toggle: false,
        type: "Long Display Field"
      },
      {
        apiName: "",
        className: "red-border",
        description: "Once you have completed the required fields, we will contact you by phone and email to assist you with the online application. You will be able to opt-out or unsubscribe at any time.",
        Do_not_show_on_PDF: "TRUE",
        Field_Format: "",
        handle: true,
        headingType: "",
        Hide_on_Finalize: "TRUE",
        label: "Basic Information text-2",
        Left_Panel_Styles: "Left-Panel-Desc-Small",
        regex: "",
        toggle: false,
        type: "Long Display Field"
      },
      {
        apiName: "",
        className: "red-border",
        description: "",
        Do_not_show_on_PDF: "TRUE",
        Field_Format: "",
        handle: true,
        headingType: "H3",
        Hide_on_Finalize: "FALSE",
        label: "Permanent Mailing Address",
        Left_Panel_Styles: "",
        regex: "",
        toggle: false,
        type: "Header"
      },
      {
        apiName: "Permanent_Street_Address_1__c",
        className: "red-border",
        description: "",
        Do_not_show_on_PDF: "FALSE",
        Field_Format: "",
        handle: true,
        headingType: "",
        Hide_on_Finalize: "FALSE",
        label: "Address Line 1",
        Left_Panel_Styles: "",
        regex: "",
        toggle: false,
        type: "Google Address Autocomplete"
      },
      {
        apiName: "Permanent_Street_Address_2__c",
        className: "red-border",
        description: "",
        Do_not_show_on_PDF: "FALSE",
        Field_Format: "",
        handle: true,
        headingType: "",
        Hide_on_Finalize: "FALSE",
        label: "Address Line 2",
        Left_Panel_Styles: "",
        regex: "",
        toggle: false,
        type: "Field"
      },
      {
        apiName: "Permanent_City__c",
        className: "red-border",
        description: "",
        Do_not_show_on_PDF: "FALSE",
        Field_Format: "",
        handle: true,
        headingType: "",
        Hide_on_Finalize: "FALSE",
        label: "City",
        Left_Panel_Styles: "",
        regex: "",
        toggle: false,
        type: "Field"
      },
      {
        apiName: "Permanent_State_Province__c",
        className: "red-border",
        description: "",
        Do_not_show_on_PDF: "FALSE",
        Field_Format: "",
        handle: true,
        headingType: "",
        Hide_on_Finalize: "FALSE",
        label: "State/Province",
        Left_Panel_Styles: "",
        regex: "",
        toggle: false,
        type: "Auto Complete"
      },
      {
        apiName: "Permanent_Zip_Code__c",
        className: "red-border",
        description: "",
        Do_not_show_on_PDF: "FALSE",
        Field_Format: "",
        handle: true,
        headingType: "",
        Hide_on_Finalize: "FALSE",
        label: "Zip/Postal Code",
        Left_Panel_Styles: "",
        regex: "",
        toggle: false,
        type: "Field"
      },
      {
        apiName: "Permanent_Country__c",
        className: "red-border",
        description: "",
        Do_not_show_on_PDF: "FALSE",
        Field_Format: "",
        handle: true,
        headingType: "",
        Hide_on_Finalize: "FALSE",
        label: "Country",
        Left_Panel_Styles: "",
        regex: "",
        toggle: false,
        type: "Field"
      },
      {
        apiName: "Citizenship__c",
        className: "red-border",
        description: "",
        Do_not_show_on_PDF: "FALSE",
        Field_Format: "",
        handle: true,
        headingType: "",
        Hide_on_Finalize: "FALSE",
        label: "Country of Citizenship",
        Left_Panel_Styles: "",
        regex: "",
        toggle: false,
        type: "Field"
      },
      {
        apiName: "Affiliated_with_US_Military__c",
        className: "red-border",
        description: "",
        Do_not_show_on_PDF: "FALSE",
        Field_Format: "",
        handle: true,
        headingType: "",
        Hide_on_Finalize: "TRUE",
        label: "Are you affiliated with the U.S. military?",
        Left_Panel_Styles: "",
        regex: "",
        toggle: false,
        type: "Radio"
      },
      {
        apiName: "Military_Status__c",
        className: "red-border",
        description: "",
        Do_not_show_on_PDF: "FALSE",
        Field_Format: "",
        handle: true,
        headingType: "",
        Hide_on_Finalize: "TRUE",
        label: "Military Status",
        Left_Panel_Styles: "",
        regex: "",
        toggle: false,
        type: "Field"
      },
      {
        apiName: "Duty_Type__c",
        className: "red-border",
        description: "",
        Do_not_show_on_PDF: "FALSE",
        Field_Format: "",
        handle: true,
        headingType: "",
        Hide_on_Finalize: "TRUE",
        label: "Anticipated status at the time you enroll",
        Left_Panel_Styles: "",
        regex: "",
        toggle: false,
        type: "Field"
      },
      {
        apiName: "Military_Branch_Picklist__c",
        className: "red-border",
        description: "",
        Do_not_show_on_PDF: "FALSE",
        Field_Format: "",
        handle: true,
        headingType: "",
        Hide_on_Finalize: "TRUE",
        label: "Branch of Service",
        Left_Panel_Styles: "",
        regex: "",
        toggle: false,
        type: "Field"
      },
      {
        apiName: "Military_Service_Start_Date__c",
        className: "red-border",
        description: "",
        Do_not_show_on_PDF: "FALSE",
        Field_Format: "",
        handle: true,
        headingType: "",
        Hide_on_Finalize: "TRUE",
        label: "Military Start Date",
        Left_Panel_Styles: "",
        regex: "",
        toggle: false,
        type: "Field"
      },
      {
        apiName: "Military_Separation_Date__c",
        className: "red-border",
        description: "",
        Do_not_show_on_PDF: "FALSE",
        Field_Format: "",
        handle: true,
        headingType: "",
        Hide_on_Finalize: "TRUE",
        label: "Military Separation Date",
        Left_Panel_Styles: "",
        regex: "",
        toggle: false,
        type: "Field"
      },
      {
        apiName: "Tuition_Reimbursement_Amount__c",
        className: "red-border",
        description: "",
        Do_not_show_on_PDF: "FALSE",
        Field_Format: "",
        handle: true,
        headingType: "",
        Hide_on_Finalize: "TRUE",
        label: "Employer tuition reimbursement amount",
        Left_Panel_Styles: "",
        regex: "",
        toggle: false,
        type: "Field"
      },
      {
        apiName: "Transfer_Credit__c",
        className: "red-border",
        description: "",
        Do_not_show_on_PDF: "FALSE",
        Field_Format: "",
        handle: true,
        headingType: "",
        Hide_on_Finalize: "TRUE",
        label: "Do you wish to transfer any credits into Anna Maria College?",
        Left_Panel_Styles: "",
        regex: "",
        toggle: false,
        type: "Radio"
      }
    ]
  };
  
  educationPage:any = {
    "name": "Basic info",
    "pageType": "Custom",
    "pageOrder": "10",
    "minTime": "5",
    "maxTime": "15",
    "minMaxTimeUnit": "Minutes",
    "leftPanel": [
      {
        "apiName": "",
        "notes": "",
        "type": "paragraph",
        "icon": "fa-paragraph",
        "label": "Basic Information text-1",
        "className": "green-border",
        "description": "To get started, please select your program of interest and complete the required fields to continue. After completing this first section, you may complete the application process in any order you desire.",
        "name": "paragraph-1619439121251"
      },
      {
        "apiName": "",
        "notes": "",
        "type": "paragraph",
        "icon": "fa-paragraph",
        "label": "Basic Information text-2",
        "className": "green-border",
        "description": "Once you have completed the required fields, we will contact you by phone and email to assist you with the online application. You will be able to opt-out or unsubscribe at any time.",
        "name": "paragraph-1619439119737"
      }
    ],
    "rightPanel": [
      {
        "apiName": "DeltakSRP__Active_Duty__c",
        "notes": "",
        "type": "text",
        "icon": "fa-font",
        "label": "Text",
        "description": "Enter your name",
        "className": "green-border",
        "subtype": "text",
        "regex": "",
        "handle": true,
        "name": "text-1619439122754",
        "toggle": false
      },
      {
        "apiName": "DeltakSRP__Email_Address__c",
        "notes": "",
        "type": "email",
        "icon": "fa-envelope",
        "label": "Email",
        "description": "Enter your email",
        "className": "green-border",
        "subtype": "text",
        "regex": "^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_.-]+).([a-zA-Z]{2,5})$",
        "errorText": "Please enter a valid email",
        "handle": true,
        "name": "email-1619439139385",
        "toggle": false
      }
    ]
  };
}
