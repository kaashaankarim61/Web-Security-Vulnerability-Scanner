from urllib.parse import urlparse, parse_qs
import requests
from bs4 import BeautifulSoup


def extract_csrf_tokens(url):
    # Send a GET request to the URL
    response = requests.get(url)

    # Parse the HTML content of the response
    soup = BeautifulSoup(response.content, 'html.parser')

    # Extract CSRF tokens from different sources
    tokens = []
    for tag in soup.find_all('input', type='hidden'):
        if tag.get('name') == 'CSRFToken':
            tokens.append(tag.get('value'))
        if tag.get('name') == '_csrf':
            tokens.append(tag.get('value'))

        # Add more conditions to extract tokens from other sources


CSRF_TOKEN_NAMES = [
    "csrf_token",
    "csrfmiddlewaretoken",
    "authenticity_token",
    "_csrf_token",
    "_csrf"
]


def extract_csrf_tokens(url):
    # Send a GET request to the URL
    response = requests.get(url)

    # Parse the HTML content of the response
    soup = BeautifulSoup(response.content, 'html.parser')

    # Extract CSRF tokens from different sources
    tokens = []

    # Check in headers
    for token_name in CSRF_TOKEN_NAMES:
        if token_name in response.headers:
            tokens.append(response.headers[token_name])

    # Check in URL
    url_parts = urlparse(url)
    url_params = parse_qs(url_parts.query)
    for token_name in CSRF_TOKEN_NAMES:
        if token_name in url_params:
            tokens.append(url_params[token_name])

    # Check in meta tags
    for meta in soup.find_all('meta'):
        if 'name' in meta.attrs and meta['name'] in CSRF_TOKEN_NAMES:
            tokens.append(meta['content'])

    # Check in forms
    for form in soup.find_all('form'):
        for input_tag in form.find_all('input'):
            if 'name' in input_tag.attrs and input_tag['name'] in CSRF_TOKEN_NAMES:
                tokens.append(input_tag['value'])

    for tag in soup.find_all('input', type='hidden'):
        if tag.get('name') == 'CSRFToken':
            tokens.append(tag.get('value'))
        if tag.get('name') == '_csrf':
            tokens.append(tag.get('value'))

    return tokens


# Example usage
url = "https://flex.nu.edu.pk/"
    
try:
    # Read the content of the file and store it in the 'url' variable
    with open('input_csrf.txt', 'r') as file:
        url = file.read()
        
except FileNotFoundError:
    print("File 'input_csrf.txt' not found. Using default URL.")
        
tokens = extract_csrf_tokens(url)
if (len(tokens) > 0):
    print(tokens)
    print("--True")
else:
    print("No tokens found")