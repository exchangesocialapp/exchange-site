#!/bin/bash
# Tells Bing (and other IndexNow engines) about every URL in sitemap.xml.
# Run after a push, once GitHub Pages has updated:  bash indexnow-ping.sh
cd "$(dirname "$0")"
URLS=$(grep -o '<loc>[^<]*' sitemap.xml | sed 's/<loc>//' | python3 -c 'import sys,json;print(json.dumps([l.strip() for l in sys.stdin if l.strip()]))')
curl -s -o /dev/null -w "IndexNow response: %{http_code} (200 or 202 = accepted)\n" \
  -X POST https://api.indexnow.org/indexnow \
  -H "Content-Type: application/json; charset=utf-8" \
  -d "{\"host\":\"exchangesocialapp.com\",\"key\":\"3c93264360b71271cd6df8a94b74621a\",\"keyLocation\":\"https://exchangesocialapp.com/3c93264360b71271cd6df8a94b74621a.txt\",\"urlList\":$URLS}"
