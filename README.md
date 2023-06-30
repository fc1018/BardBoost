# BardBoost
BardBoost is a javascript boost for the Google Bard beta that creates a shortcut to Bard from a new tab
## Installation
To install BardBoost, follow these steps:

1. Go to [Google Bard](https://bard.google.com/) in Arc
2. Create a new boost and copy the contents of [boost.js](https://github.com/fc1018/bardboost/blob/master/boost.js) into the JS section of the boost and save
3. Go to arc://settings/searchEngines
4. Add a new site search
5. Input the following entries:
   
     Search Engine = "Google Bard"
   
     Shortcut = "bard"
   
     URL with %s in place of query = "https://bard.google.com/?question=%s"
7. Save site search

## Usage
When the new tab shortcut is used in arc (cmd + T), the site search for 
google bard can be initialised using the "bard" keyword followed by tab. A query can then be entered and when submitted will open bard with the query
automatically submitted.

## Compatibility
BardBoost is designed as a v2 boost so is with arc version 0.105 or newer 

## Feedback
If you have any feedback, suggestions, or issues with BardBoost, please feel free to open an issue on GitHub
