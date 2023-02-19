import { VStack } from '@chakra-ui/react';

import FileUpload from '../components/file-upload/file-upload';
import { LabelsTable } from '../components/labels-table/labels-table';
import { Navbar } from '../components/navbar/navbar';
import { useLabels } from '../context/labels/labels-context';

export function HomePage() {
  const { labels } = useLabels();
  return (
    <VStack verticalAlign='center' height='100vh' justifyContent='center'>
      <Navbar />
      {labels ? <LabelsTable /> : <FileUpload px='32' py='16' size='md' />}
    </VStack>
  );
}
