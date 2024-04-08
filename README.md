## About

The purpose of this project is for people to be able to search and visualize data regarding US county median housing costs and respective voting demographics. The site features a search bar, a results section, and an interactive SVG map with the US counties.

## Display 

The rendered SVG map can change visually by selecting a county, either through searching via the search bar or by clicking a county on the map. There is a custom component which serves as a container for the SVG data stored in the object found in SVGdata.js. The color of the selected county shows the ratio of Blue vs. Red voters on a color gradient.

## Data Collection

The data for this project has been created by combining two data sets. From these datasets I created a new source which includes the following data for each US County:

Fips code, a 1-bedroom apartment fair market rate, the total republican and democratic votes. 

## Sources

For the FMR (fair market rate) data: https://www.huduser.gov/portal/datasets/fmr.html

For the voting data: https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/DGUMFI

## Notes

The voting data is solely using the active votes from the 2020 presidential election.

The data does not include Alaskan or certain New England counties due to inconsistent records county by county.

For some of the New England counties, FMR data had to be averaged due to it being subdivided in the original data. All averaged data is marked with 'yes' in the 'isAVG' column. Furthermore, the county name will appear with an * appended to the end to indicate that the county data was averaged.