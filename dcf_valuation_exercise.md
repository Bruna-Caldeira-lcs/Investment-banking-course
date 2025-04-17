# DCF Valuation Exercise

## Introduction

This exercise will help you develop practical skills in building a Discounted Cash Flow (DCF) model, one of the most fundamental valuation methodologies used in investment banking. You will apply the concepts learned in Module 3: Valuation Methodologies to value a publicly traded company and determine its intrinsic value.

## Learning Objectives

By completing this exercise, you will be able to:
- Build a comprehensive DCF model from scratch
- Project future financial performance based on historical data and assumptions
- Calculate an appropriate discount rate using WACC
- Determine terminal value using multiple approaches
- Perform sensitivity analysis to test the robustness of your valuation
- Draw conclusions about a company's intrinsic value compared to its market price

## Exercise Materials

### Required Resources
- The attached Excel template: "DCF_Valuation_Template.xlsx"
- Annual reports for Starbucks Corporation (SBUX) for the past 3 fiscal years
- Industry and market data provided in the "Market_Data.xlsx" file

### Software Requirements
- Microsoft Excel or Google Sheets
- PDF reader for annual reports

## Part 1: Data Collection and Historical Analysis (30 minutes)

1. Download the annual reports for Starbucks Corporation (SBUX) for the past 3 fiscal years from the company's investor relations website or the SEC EDGAR database.

2. Open the "DCF_Valuation_Template.xlsx" file.

3. Using the annual reports, extract the following historical financial data and enter it into the template:

   **Income Statement Items:**
   - Revenue
   - Cost of Goods Sold
   - Gross Profit
   - Operating Expenses
   - EBITDA
   - Depreciation & Amortization
   - EBIT
   - Interest Expense
   - Income Before Taxes
   - Taxes
   - Net Income

   **Balance Sheet Items:**
   - Cash and Cash Equivalents
   - Accounts Receivable
   - Inventory
   - Other Current Assets
   - Total Current Assets
   - Property, Plant, and Equipment (Gross)
   - Accumulated Depreciation
   - Property, Plant, and Equipment (Net)
   - Goodwill and Intangibles
   - Other Long-term Assets
   - Total Assets
   - Accounts Payable
   - Short-term Debt
   - Other Current Liabilities
   - Total Current Liabilities
   - Long-term Debt
   - Other Long-term Liabilities
   - Total Liabilities
   - Total Shareholders' Equity

   **Cash Flow Statement Items:**
   - Net Income
   - Depreciation & Amortization
   - Changes in Working Capital
   - Cash Flow from Operations
   - Capital Expenditures
   - Other Investing Activities
   - Cash Flow from Investing
   - Debt Issuance/Repayment
   - Dividends Paid
   - Share Repurchases
   - Cash Flow from Financing

4. Calculate historical financial ratios and growth rates:
   - Revenue growth rate
   - EBITDA margin
   - EBIT margin
   - Net profit margin
   - Tax rate
   - Capital expenditure as % of revenue
   - Depreciation as % of PP&E
   - Working capital as % of revenue

## Part 2: Financial Projections (45 minutes)

1. Based on the historical performance and your analysis of Starbucks' business, develop 5-year projections for the company's financial statements:

   a. **Revenue Projection:**
      - Project revenue growth for the next 5 years
      - Consider industry trends, company guidance, and historical performance
      - Document your assumptions and rationale

   b. **Income Statement Projection:**
      - Project COGS based on historical gross margins and expected trends
      - Project operating expenses based on historical ratios and expected efficiencies
      - Calculate projected EBITDA, EBIT, and net income
      - Apply an appropriate tax rate based on historical data and current tax laws

   c. **Balance Sheet Projection:**
      - Project working capital items based on historical ratios to revenue
      - Project capital expenditures based on historical trends and company guidance
      - Calculate PP&E based on beginning balance, capex, and depreciation
      - Project other balance sheet items using appropriate drivers

   d. **Cash Flow Statement Projection:**
      - Build the cash flow statement based on your income statement and balance sheet projections
      - Ensure consistency across all three financial statements

2. Calculate the projected free cash flow to firm (FCFF) for each year:
   FCFF = EBIT × (1 - Tax Rate) + Depreciation & Amortization - Capital Expenditures - Increase in Net Working Capital

## Part 3: WACC Calculation (30 minutes)

Calculate the Weighted Average Cost of Capital (WACC) for Starbucks:

1. **Cost of Equity:**
   - Determine the risk-free rate using the 10-year U.S. Treasury yield
   - Find Starbucks' beta from the provided market data
   - Use an appropriate equity risk premium (provided in the market data file)
   - Calculate cost of equity using the Capital Asset Pricing Model (CAPM):
     Cost of Equity = Risk-free Rate + Beta × Equity Risk Premium

2. **Cost of Debt:**
   - Determine Starbucks' pre-tax cost of debt using the yield on its outstanding bonds (provided in the market data file)
   - Calculate the after-tax cost of debt:
     After-tax Cost of Debt = Pre-tax Cost of Debt × (1 - Tax Rate)

3. **Capital Structure:**
   - Calculate the market value of Starbucks' equity (current stock price × shares outstanding)
   - Determine the market value of Starbucks' debt
   - Calculate the weights of equity and debt in the capital structure

4. **WACC Calculation:**
   - Calculate WACC using the formula:
     WACC = (Weight of Equity × Cost of Equity) + (Weight of Debt × After-tax Cost of Debt)

## Part 4: Terminal Value and DCF Calculation (30 minutes)

1. **Terminal Value Calculation:**
   - Calculate terminal value using the perpetuity growth method:
     Terminal Value = FCF in final year × (1 + g) / (WACC - g)
     where g is the perpetual growth rate (typically 2-3%)

   - Also calculate terminal value using the exit multiple method:
     Terminal Value = EBITDA in final year × Terminal EV/EBITDA multiple

2. **DCF Valuation:**
   - Discount each projected free cash flow and the terminal value back to present value using the WACC
   - Sum all discounted values to get the enterprise value
   - Calculate equity value by subtracting net debt (total debt - cash) from enterprise value
   - Determine the per share value by dividing equity value by shares outstanding
   - Compare your DCF value to Starbucks' current stock price

## Part 5: Sensitivity Analysis (30 minutes)

1. Create a sensitivity table showing how the stock price changes based on different assumptions for:
   - WACC (±2% from your base case, in 0.5% increments)
   - Terminal growth rate (±1% from your base case, in 0.25% increments)

2. Create a second sensitivity table showing how the stock price changes based on different assumptions for:
   - Revenue growth rate (±2% from your base case)
   - EBITDA margin (±2% from your base case)

3. Identify the key value drivers that have the most significant impact on Starbucks' valuation.

## Part 6: Valuation Report (45 minutes)

Write a 750-word valuation report that includes:

1. **Executive Summary:**
   - Brief company overview
   - Summary of valuation results
   - Comparison to current market price
   - Investment recommendation (buy, sell, or hold)

2. **Valuation Methodology:**
   - Description of the DCF approach used
   - Key assumptions and their rationale
   - Limitations of the analysis

3. **Financial Analysis:**
   - Summary of historical performance
   - Key projection assumptions
   - Analysis of projected financial performance

4. **Valuation Results:**
   - Detailed DCF valuation results
   - Sensitivity analysis findings
   - Comparison to market price and analyst consensus

5. **Risk Factors:**
   - Key risks that could impact the valuation
   - Potential upside and downside scenarios

6. **Conclusion and Recommendation:**
   - Final valuation range
   - Investment recommendation with rationale
   - Potential catalysts that could change the outlook

## Part 7: Presentation (Optional)

Prepare a brief presentation (8-10 slides) summarizing your valuation analysis and investment recommendation. Your presentation should include:

1. Company overview
2. Valuation methodology and key assumptions
3. Summary of financial projections
4. DCF valuation results
5. Sensitivity analysis
6. Risk factors
7. Investment recommendation

## Submission Guidelines

Submit the following items:
1. Completed Excel model with all calculations
2. Valuation report (750 words)
3. Presentation slides (if completing Part 7)

## Evaluation Criteria

Your work will be evaluated based on:
- Accuracy and completeness of the DCF model
- Reasonableness of assumptions and projections
- Proper application of valuation techniques
- Depth and insight of analysis
- Quality of sensitivity analysis
- Clarity and coherence of written report
- Soundness of investment recommendation
- Professional presentation

## Additional Resources

- Starbucks Investor Relations: [https://investor.starbucks.com](https://investor.starbucks.com)
- SEC EDGAR Database: [https://www.sec.gov/edgar/searchedgar/companysearch.html](https://www.sec.gov/edgar/searchedgar/companysearch.html)
- Damodaran Online (for market data): [https://pages.stern.nyu.edu/~adamodar/](https://pages.stern.nyu.edu/~adamodar/)
- DCF Valuation Guide (included in course materials)
