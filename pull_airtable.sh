#!/bin/bash -
#===============================================================================
#
#          FILE: pull_airtable
#
#         USAGE: ./pull_airtable.sh path_to_save
#
#   DESCRIPTION: Fetch airtable data (SPONSORS, SCHEDULE...) before build.
#
#       OPTIONS: ---
#  REQUIREMENTS: ---
#          BUGS: ---
#         NOTES: To get Airtable key, please contact the author
#        AUTHOR: Lawrence Chou (lawrencechou1024@gmail.com),
#  ORGANIZATION: g0v summit 2018
#       CREATED: 03/06/18 00:12:27
#      REVISION:  ---
#===============================================================================

set -o nounset                              # Treat unset variables as an error

# Have key in environment
# AIRTABLE_KEY_G0V_SUMMIT_2018=keyXXXXXXXXXXXXXX

# Tables to fetch
TABLES="SPONSORS SCHEDULE SPEAKERS STREAMMING STAFF OTHER"
SAVE_TO=$1 || "./static/airtable_data/"

# Fetch and store data to /static
for TABLE_NAME in $TABLES
do
  echo "Fetchinging $TABLE_NAME"

  curl "https://api.airtable.com/v0/appE5bjcvPZjbkp81/${TABLE_NAME}?maxRecords=3&view=Grid%20view" \
  -H "Authorization: Bearer ${AIRTABLE_KEY_G0V_SUMMIT_2018}" \
  > ${SAVE_TO}${TABLE_NAME}.json
done

# Report
echo "Saved everything to ${SAVE_TO}:"
ls -al $SAVE_TO