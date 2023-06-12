import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  region: process.env.REACT_APP_AWS_REGION,
});

export const awsGetPhoto = async (path: string) => {
  const s3 = new AWS.S3();
  const params = {
    Bucket: 'catalog-photos-lgtm',
    Key: path,
  };

  const data = await s3.getObject(params).promise();

  const photoUrl = URL.createObjectURL(new Blob([data.Body as BlobPart]));

  return photoUrl;
};
