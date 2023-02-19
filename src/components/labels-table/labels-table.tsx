import {
  Box,
  HStack,
  Table,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { useLabels } from '../../context/labels/labels-context';

import { LabelsTableBody } from './labels-table-body';
import { LabelsTableHeader } from './labels-table-header';
import { LabelsTablePagination } from './labels-table-pagination';
import { LabelsTablePaginationButton } from './labels-table-pagination-buttons';
import { LabelsTableSelectLanguages } from './labels-table-select-language';

export function LabelsTable() {
  const { labels, languagesList } = useLabels();

  const [selectedLanguages, setSelectedLanguages] = useState(languagesList);

  useEffect(() => {
    setSelectedLanguages(languagesList);
  }, [languagesList]);

  const [size, setSize] = useState(25);
  const [page, setPage] = useState(0);

  return (
    <Box overflowX='scroll'>
      <TableContainer overflowX='unset' overflowY='unset'>
        <Table
          variant='simple'
          colorScheme='teal'
          size='md'
          width='100%'
          layout='fixed'
        >
          <colgroup>
            <col span={1} style={{ width: '30%' }} />
            <col span={1} style={{ width: '70%' }} />
          </colgroup>
          <TableCaption placement='top'>
            <HStack justifyContent='space-between'>
              <LabelsTablePagination onChange={setSize} />
              <LabelsTableSelectLanguages
                onChange={setSelectedLanguages}
                selectedLanguages={selectedLanguages}
              />
            </HStack>
          </TableCaption>
          <TableCaption placement='bottom'>
            <HStack justifyContent='space-between'>
              <LabelsTablePagination onChange={setSize} />
              <LabelsTablePaginationButton
                size={size}
                page={page}
                onChange={setPage}
                numberOfItems={Object.keys(labels ?? {}).length}
              />
            </HStack>
          </TableCaption>
          <LabelsTableHeader />
          <LabelsTableBody
            size={size}
            page={page}
            selectedLanguages={selectedLanguages}
          />
        </Table>
      </TableContainer>
    </Box>
  );
}
