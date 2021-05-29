if [ $(echo "$ENVIRONMENT")=="develop" ]
then
    unset REACT_APP_STREAMS_API_BASE_URL
    export REACT_APP_STREAMS_API_BASE_URL=http://localhost:5001/
    npm run dev
else
    npm run build
    npm run start
fi

echo "`date`: 🤖 All ready boss!"