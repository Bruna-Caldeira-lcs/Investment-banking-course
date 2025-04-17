# Financial Modeling Exercise: Three-Statement Model

## Introduction

This exercise will help you develop practical skills in building a comprehensive three-statement financial model, a fundamental skill for investment banking analysts. You will apply the concepts learned in Module 6: Financial Modeling to create an integrated model that links the income statement, balance sheet, and cash flow statement.

## Learning Objectives

By completing this exercise, you will be able to:
- Build a fully integrated three-statement financial model from scratch
- Create dynamic financial projections based on historical data and assumptions
- Implement circularity in a financial model correctly
- Develop flexible and user-friendly model structures
- Perform scenario analysis to test different business outcomes
- Create professional output dashboards for presenting results

## Exercise Materials

### Required Resources
- The attached Excel template: "Three_Statement_Model_Template.xlsx"
- Annual reports for Nike, Inc. (NKE) for the past 3 fiscal years
- Industry research report: "Footwear_Industry_Outlook.pdf"

### Software Requirements
- Microsoft Excel (2016 or later recommended)
- PDF reader for annual reports

## Part 1: Data Collection and Setup (30 minutes)

1. Download the annual reports for Nike, Inc. (NKE) for the past 3 fiscal years from the company's investor relations website or the SEC EDGAR database.

2. Open the "Three_Statement_Model_Template.xlsx" file and familiarize yourself with its structure.

3. Set up the model framework:
   - Create separate worksheets for assumptions, historical data, projections, and output
   - Establish a consistent color-coding system (e.g., blue for inputs, black for formulas, green for links)
   - Set up time periods (historical years and 5 projection years)
   - Create a cover page with model information and table of contents

4. Extract historical financial data from Nike's annual reports and input into your model:

   **Income Statement Items:**
   - Revenue (by segment if available)
   - Cost of Goods Sold
   - Gross Profit
   - SG&A Expenses
   - R&D Expenses
   - Other Operating Expenses
   - Operating Income
   - Interest Income
   - Interest Expense
   - Other Income/Expense
   - Income Before Taxes
   - Income Tax Expense
   - Net Income

   **Balance Sheet Items:**
   - Cash and Cash Equivalents
   - Short-term Investments
   - Accounts Receivable
   - Inventory
   - Other Current Assets
   - Total Current Assets
   - Property, Plant, and Equipment (Gross)
   - Accumulated Depreciation
   - Property, Plant, and Equipment (Net)
   - Goodwill
   - Intangible Assets
   - Other Long-term Assets
   - Total Assets
   - Accounts Payable
   - Short-term Debt
   - Accrued Liabilities
   - Other Current Liabilities
   - Total Current Liabilities
   - Long-term Debt
   - Deferred Tax Liabilities
   - Other Long-term Liabilities
   - Total Liabilities
   - Common Stock
   - Additional Paid-in Capital
   - Retained Earnings
   - Treasury Stock
   - Accumulated Other Comprehensive Income
   - Total Shareholders' Equity

   **Cash Flow Statement Items:**
   - Net Income
   - Depreciation & Amortization
   - Stock-based Compensation
   - Changes in Working Capital
   - Other Operating Activities
   - Cash Flow from Operations
   - Capital Expenditures
   - Acquisitions
   - Other Investing Activities
   - Cash Flow from Investing
   - Debt Issuance/Repayment
   - Dividends Paid
   - Share Repurchases
   - Other Financing Activities
   - Cash Flow from Financing

## Part 2: Historical Analysis and Assumptions (45 minutes)

1. Calculate key historical financial metrics and ratios:
   - Growth rates (revenue, EBITDA, net income)
   - Profit margins (gross margin, EBITDA margin, net profit margin)
   - Working capital metrics (days sales outstanding, days inventory outstanding, days payable outstanding)
   - Capital expenditure as % of revenue
   - Depreciation as % of PP&E
   - Effective tax rate
   - Debt-to-EBITDA ratio
   - Interest coverage ratio

2. Create an assumptions worksheet with the following sections:

   a. **Operating Assumptions:**
      - Revenue growth rates
      - Gross margin
      - SG&A as % of revenue
      - R&D as % of revenue
      - Other operating expenses as % of revenue
      - Effective tax rate

   b. **Working Capital Assumptions:**
      - Days sales outstanding
      - Days inventory outstanding
      - Days payable outstanding
      - Other current assets as % of revenue
      - Accrued liabilities as % of revenue
      - Other current liabilities as % of revenue

   c. **Capital Investment Assumptions:**
      - Capital expenditure as % of revenue
      - Depreciation as % of gross PP&E
      - Acquisition spending (if applicable)

   d. **Financing Assumptions:**
      - Interest rate on cash
      - Interest rate on debt
      - Dividend payout ratio
      - Share repurchase amount
      - Debt issuance/repayment schedule

3. Based on your historical analysis and the industry outlook report, develop projection assumptions for the next 5 years. Document your rationale for each key assumption.

## Part 3: Building the Projection Model (90 minutes)

1. **Income Statement Projections:**
   - Project revenue using growth assumptions
   - Calculate COGS based on gross margin assumptions
   - Project operating expenses using appropriate drivers
   - Calculate operating income
   - Project interest income based on cash balances and assumed interest rates
   - Project interest expense based on debt balances and assumed interest rates
   - Calculate income before taxes
   - Apply tax rate to calculate net income

2. **Balance Sheet Projections:**
   - Project working capital accounts using the assumptions developed
   - Calculate PP&E based on beginning balance, capex, and depreciation
   - Project other long-term assets using appropriate drivers
   - Calculate total assets
   - Project liabilities using appropriate drivers
   - Calculate shareholders' equity components:
     - Update retained earnings based on net income and dividends
     - Project share repurchases and their impact on treasury stock
     - Calculate total shareholders' equity
   - Implement a cash sweep or revolver to balance the balance sheet

3. **Cash Flow Statement Projections:**
   - Start with net income
   - Add back non-cash expenses (depreciation, amortization, stock-based compensation)
   - Calculate changes in working capital
   - Calculate cash flow from operations
   - Project capital expenditures and other investing activities
   - Calculate cash flow from investing
   - Project financing activities (debt issuance/repayment, dividends, share repurchases)
   - Calculate cash flow from financing
   - Calculate net change in cash
   - Update ending cash balance

4. **Circularity Implementation:**
   - Create proper circular references for interest calculations
   - Implement a cash sweep mechanism
   - Ensure the model balances and functions correctly
   - Add error checks to verify model integrity

## Part 4: Model Functionality and Scenarios (45 minutes)

1. **Create a Dashboard:**
   - Develop a summary dashboard with key financial metrics
   - Create charts for key trends (revenue growth, margins, EPS growth)
   - Include a DCF valuation summary
   - Add ratio analysis section

2. **Implement Scenario Analysis:**
   - Create a scenario manager with at least three scenarios:
     - Base Case (your primary projections)
     - Upside Case (more optimistic assumptions)
     - Downside Case (more conservative assumptions)
   - Allow for easy toggling between scenarios
   - Show the impact of different scenarios on key metrics

3. **Add Sensitivity Analysis:**
   - Create a sensitivity table for revenue growth vs. EBITDA margin
   - Create a sensitivity table for capex vs. revenue growth
   - Show the impact on key valuation metrics

4. **Model Checks and Documentation:**
   - Implement balance sheet check (Assets = Liabilities + Equity)
   - Add cash flow check (Beginning Cash + Net Change = Ending Cash)
   - Create a change log to document model versions
   - Add clear documentation of key assumptions and methodologies

## Part 5: Valuation and Analysis (30 minutes)

1. **DCF Valuation:**
   - Calculate unlevered free cash flow for projection period
   - Determine an appropriate WACC
   - Calculate terminal value using perpetuity growth method
   - Discount cash flows to present value
   - Calculate implied enterprise value and equity value
   - Determine implied share price and compare to current market price

2. **Trading Multiples Analysis:**
   - Calculate implied valuation using EV/EBITDA multiple
   - Calculate implied valuation using P/E multiple
   - Compare different valuation methodologies

3. **Financial Analysis:**
   - Analyze projected financial performance
   - Identify key drivers of value
   - Assess financial health and sustainability
   - Compare projected performance to historical trends

## Part 6: Presentation and Documentation (30 minutes)

1. **Executive Summary:**
   - Write a 1-page executive summary of your financial model and key findings
   - Highlight key assumptions and projections
   - Summarize valuation results
   - Identify risks and opportunities

2. **Model Documentation:**
   - Create a separate worksheet with detailed documentation
   - Explain the structure and methodology of your model
   - Document key formulas and calculations
   - Provide instructions for using the model

3. **Presentation Slides:**
   - Create 5-7 slides summarizing your model and analysis
   - Include key charts and tables
   - Highlight important insights and conclusions
   - Format professionally as you would for a client presentation

## Submission Guidelines

Submit the following items:
1. Completed Excel model with all calculations and functionality
2. One-page executive summary
3. Presentation slides (5-7 slides)

## Evaluation Criteria

Your work will be evaluated based on:
- Model accuracy and integrity
- Formula efficiency and structure
- Reasonableness of assumptions
- Proper implementation of circularity
- Quality of scenario and sensitivity analysis
- Professional presentation of outputs
- Clarity of documentation
- Overall usability of the model

## Additional Resources

- Nike Investor Relations: [https://investors.nike.com](https://investors.nike.com)
- SEC EDGAR Database: [https://www.sec.gov/edgar/searchedgar/companysearch.html](https://www.sec.gov/edgar/searchedgar/companysearch.html)
- Financial Modeling Best Practices Guide (included in course materials)
- Excel Shortcuts Reference for Financial Modeling (included in course materials)
