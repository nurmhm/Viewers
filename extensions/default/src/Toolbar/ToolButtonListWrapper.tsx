import React from 'react';
import {
  ToolButton,
} from '@ohif/ui-next';
import { useToolbar } from '@ohif/core/src';

interface ToolButtonListWrapperProps {
  buttonSection: string;
  onInteraction?: (details: { itemId: string; commands?: Record<string, unknown> }) => void;
  id: string;
}

/**
 * Wrareplaces the ToolButtonList component to handle the OHIF toolbar button structure
 * @param props - Component props
 * @returns Component
 * // test
 */
export default function ToolButtonListWrapper({ buttonSection, id }: ToolButtonListWrapperProps) {
  const { onInteraction, toolbarButtons } = useToolbar({
    buttonSection,
  });

  if (!toolbarButtons?.length) {
    return null;
  }

  const items = toolbarButtons.map(button => button.componentProps);

  return (
    <>
      {items.map(item => (
        <ToolButton
          key={item.id}
          {...item}
          onInteraction={({ itemId }) =>
            onInteraction?.({ id, itemId, commands: item.commands })
          }
          className={item.className}
        />
      ))}
    </>
  );
}
