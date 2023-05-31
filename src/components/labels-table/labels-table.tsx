import {
  Box,
  HStack,
  Table,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { useLabels } from '../../context/labels/labels-context';
import { LabelsList } from '../../context/labels/labels-state';
import { findMissingLabels } from '../../utils/find-missing-labels';

import { LabelsTableBody } from './labels-table-body';
import { LabelsTableFilter } from './labels-table-filters';
import { LabelsTableHeader } from './labels-table-header';
import { LabelsTablePagination } from './labels-table-pagination';
import { LabelsTablePaginationButton } from './labels-table-pagination-buttons';
import { LabelsTableSelectLanguages } from './labels-table-select-language';

export function LabelsTable() {
  const { labels, languagesList } = useLabels();
  const [labelsToDisplay, setLabelsToDisplay] = useState(labels);
  const [showOnlyMissing, setShowOnlyMissing] = useState(false);
  const [size, setSize] = useState(25);
  const [page, setPage] = useState(0);

  const [selectedLanguages, setSelectedLanguages] = useState(languagesList);

  useEffect(() => {
    setSelectedLanguages(languagesList);
  }, [languagesList]);

  useEffect(() => {
    if (showOnlyMissing) {
      const missingLabels = findMissingLabels(labels ?? {}, languagesList);
      setLabelsToDisplay(missingLabels);
    } else {
      setLabelsToDisplay(labels);
    }
  }, [labels, showOnlyMissing]);

  const handleOnlyMissingChange = useCallback(
    (newShowOnlyMissing: boolean) => {
      setShowOnlyMissing(newShowOnlyMissing);
    },
    [labels, showOnlyMissing],
  );

  const currentPage = useMemo(() => {
    const startIndex = page * size;
    const currentLabels: LabelsList = {};
    Object.keys(labelsToDisplay ?? {})
      .slice(startIndex, startIndex + size)
      .forEach((label) => {
        currentLabels[label] = labelsToDisplay![label];
      });

    return currentLabels;
  }, [page, size, labelsToDisplay]);

  return (
    <Box overflowX='scroll'>
      <TableContainer overflowX='unset' overflowY='unset'>
        <Table
          variant='simple'
          colorScheme='gray'
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
              <LabelsTablePagination
                onChange={setSize}
                labels={labelsToDisplay!}
              />
              <LabelsTableFilter
                onShowOnlyMissingChange={handleOnlyMissingChange}
              />
              <LabelsTableSelectLanguages
                onChange={setSelectedLanguages}
                selectedLanguages={selectedLanguages}
              />
            </HStack>
          </TableCaption>
          <TableCaption placement='bottom'>
            <HStack justifyContent='space-between'>
              <LabelsTablePagination
                onChange={setSize}
                labels={labelsToDisplay!}
              />
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
            labels={currentPage}
            selectedLanguages={selectedLanguages}
          />
        </Table>
      </TableContainer>
    </Box>
  );
}
