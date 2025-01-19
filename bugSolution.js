The issue stems from improper handling of URL encoding.  Special characters in query parameters need to be encoded to ensure correct parsing.  Here's how to fix it:

```javascript
// bugSolution.js
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [initialUrl, setInitialUrl] = useState(null);

  useEffect(() => {
    const getInitialUrl = async () => {
      let url = await Linking.getInitialURL();
      if (url) {
        // Encode the URL properly
        const encodedUrl = encodeURI(url);
        setInitialUrl(encodedUrl);
      }
    };
    getInitialUrl();
  }, []);

  return (
    <View>
      {initialUrl && (
        <Text>Initial URL (Encoded): {initialUrl}</Text>
      )}
    </View>
  );
};

export default App;
```
By using `encodeURI(url)`, we ensure that all special characters are properly encoded before processing, thus resolving the issue with `Linking.getInitialURL()`.