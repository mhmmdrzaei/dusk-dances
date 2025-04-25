import { CogIcon, LemonIcon, HomeIcon, CaseIcon, ChartUpwardIcon} from '@sanity/icons';
import { structureTool } from 'sanity/structure';

export const myStructure = (S) => {
  return S.list()
    .title('Dusk Dances')
    .items([
      ...S.documentTypeListItems()
        .reverse()
        .filter((listItem) => {
          const id = listItem.getId();
          if (!id) return true;
          return !['page', 'siteSettings', 'seasons', 'staff', "seasonLocations"].includes(id);
        }),

      // Pages
      S.listItem()
        .title('Pages')
        .icon(LemonIcon)
        .child(S.documentTypeList('page')),

      // Seasons
      S.listItem()
        .title('Seasons')
        .icon(CaseIcon)
        .child(S.documentTypeList('seasons')),
    // Locations
      S.listItem()
        .title('Season Locations')
        .icon(ChartUpwardIcon)
        .child(S.documentTypeList('seasonLocations')),
     // Staff
      S.listItem()
        .title('Staff & Board')
        .icon(CogIcon)
        .child(S.documentTypeList('staff')),

      // Site Settings
      S.listItem()
        .title('Site Settings')
        .icon(HomeIcon)
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
    ]);
};
