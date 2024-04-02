type Uri = string;

function replaceURI(uri: Uri, offerId: string, status: string = ''): Uri {
  const patternId = /{offerId}/g;
  const patternStatus = /{status}/g;

  return uri.replace(patternId, offerId)
    .replace(patternStatus, status);
}

export {replaceURI};
