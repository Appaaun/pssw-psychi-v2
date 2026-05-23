exports.handler = async function(event, context) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  
  return {
    statusCode: 200,
    headers: { 
      'Content-Type': 'application/json', 
      'Access-Control-Allow-Origin': '*' 
    },
    body: JSON.stringify({ 
      keyExists: !!apiKey,
      keyLength: apiKey ? apiKey.length : 0,
      keyStart: apiKey ? apiKey.substring(0, 15) : 'none'
    })
  };
};
