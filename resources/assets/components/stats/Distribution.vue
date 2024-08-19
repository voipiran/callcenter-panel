<template>
  <div id="distribution" class="app">
    <notifications position="bottom left" :duration="5000" />

    <!-- content -->
    <div class="container-fluid" v-if="distribution.details">
      <div class="d-flex align-content-center justify-content-between mb-3">
        <!-- title -->
        <h3>{{ $t('STATS.DIS.title') }}</h3>
        <!-- {{-- refresh btn --}} -->
        <div class="refresh-ctn">
          <div
            @click="
              distribution.details = null;
              resetTime();
              getData();
            "
            class="refresh"
          ></div>
        </div>
      </div>

      <!-- detail -->
      <div class="table-shadow detail row" id="detail">
        <!-- report detail -->
        <div class="col-12 col-md-6">
          <h5>
            {{ $t('GENERAL.report.title') }}
          </h5>
          <ul>
            <li>
              <span>{{ $t('GENERAL.report.queue') }} : </span><b>{{ home.queues ? showLable(home.queues) : $t('GENERAL.empty') }}</b>
            </li>
            <li>
              <span>{{ $t('GENERAL.report.fromFilter') }} : </span><b>{{ home.fromFilterFaLable ? home.fromFilterFaLable : $t('GENERAL.empty') }}</b>
            </li>
            <li>
              <span> {{ $t('GENERAL.report.toFilter') }} : </span><b>{{ home.toFilterFaLable ? home.toFilterFaLable : $t('GENERAL.empty') }}</b>
            </li>
            <li>
              <span> {{ $t('GENERAL.report.range') }} : </span><b>{{ home.timeFilter ? $t(`STATS.HOME.${home.timeFilter.code}`) : $t('GENERAL.empty') }}</b>
            </li>
          </ul>
        </div>
        <!-- call detail -->
        <div class="col-12 col-md-6" v-if="distribution.details">
          <h5>{{ $t('STATS.DIS.detail.title') }}</h5>
          <ul>
            <li>
              <span> {{ $t('STATS.DIS.detail.answered') }} : </span><b>{{ distribution.details.answered }} {{ $t('GENERAL.call') }}</b>
            </li>
            <li>
              <span> {{ $t('STATS.DIS.detail.unAnswered') }} : </span><b> {{ distribution.details.Unanswered }} {{ $t('GENERAL.call') }}</b>
            </li>
            <li>
              <span> {{ $t('STATS.DIS.detail.login') }} : </span><b> {{ distribution.details.login }} {{ $t('GENERAL.person') }}</b>
            </li>
            <li>
              <span> {{ $t('STATS.DIS.detail.logout') }} : </span><b>{{ distribution.details.logout }} {{ $t('GENERAL.person') }}</b>
            </li>
          </ul>
        </div>
      </div>

      <!-- میانگین زمان انتظار در ساعت-->
      <div class="table-shadow row" v-if="distribution.waitByDate" id="waitByDate">
        <!-- title -->
        <div class="d-flex justify-content-between align-items-center w-100">
          <div class="d-flex">
            <div class="guide" v-if="$t('STATS.DIS.wait.GUIDE')">
              <p>{{ $t('STATS.DIS.wait.GUIDE') }}</p>
            </div>
            <h5 class="m-0">{{ $t('STATS.DIS.wait.title') }}</h5>
          </div>
          <div class="export">
            <div class="pdf" @click="tableExport('DIS_waitByDate', 'pdf')" :title="$t('GENERAL.pdfExport')"></div>
            <div class="excel" @click="tableExport('DIS_waitByDate', 'xls')" :title="$t('GENERAL.excelExport')"></div>
            <div class="csv" @click="tableExport('DIS_waitByDate', 'csv')" :title="$t('GENERAL.csvExport')"></div>
          </div>
        </div>

        <!--vue good table -->
        <div class="w-100" dir="ltr">
          <vue-good-table :columns="columnsWaitByDate" :rows="distribution.waitByDate" :search-options="optionsTable">
            <!-- customize fields  -->
            <template #table-row="props">
              <span v-if="props.column.field == 'date'">
                <span v-if="$i18n.locale == 'en'" dir="rtl">{{ jdate(props.row.date, 'YYYY/MM/DD') }}</span>
                <span v-else dir="rtl">{{ jdate(props.row.date, 'jYYYY/jMM/jDD') }}</span>
              </span>
              <span v-else-if="props.column.field == 'pAnswered'">
                <span dir="rtl">{{ props.row.countAnswered ? ((props.row.countAnswered * 100) / (props.row.countAnswered * 1 + (props.row.countUnanswered ? props.row.countUnanswered * 1 : 0))).toFixed(2) : 0 }} {{ $t('GENERAL.percentage') }}</span>
              </span>
              <span v-else-if="props.column.field == 'pUnAnswered'">
                <span dir="rtl">{{ props.row.countUnanswered ? ((props.row.countUnanswered * 100) / (props.row.countUnanswered * 1 + (props.row.countAnswered ? props.row.countAnswered * 1 : 0))).toFixed(2) : 0 }} {{ $t('GENERAL.percentage') }}</span>
              </span>
              <span v-else-if="props.column.field == 'countUnanswered'">
                <span>{{ props.row.countUnanswered ? props.row.countUnanswered : 0 }}</span>
              </span>
              <span v-else-if="props.column.field == 'data2Answered'">
                <span dir="rtl">{{ props.row.data2Answered ? secondsToDay(props.row.data2Answered, false, 'table') : 0 }}</span>
              </span>
              <span v-else-if="props.column.field == 'data1Answered'">
                <span dir="rtl">{{ props.row.data1Answered ? secondsToDay(props.row.data1Answered, false, 'table') : 0 }}</span>
              </span>
              <span v-else>
                {{ props.formattedRow[props.column.field] }}
              </span>
            </template>
          </vue-good-table>
        </div>

        <!-- the page content for export -->
        <table class="mt-3" id="DIS_waitByDate" v-show="false">
          <thead>
            <tr>
              <th>{{ $t('STATS.DIS.wait.data') }}</th>
              <th>{{ $t('STATS.DIS.wait.answered') }}</th>
              <th>{{ $t('STATS.DIS.wait.pAnswered') }}</th>
              <th>{{ $t('STATS.DIS.wait.unAnswered') }}</th>
              <th>{{ $t('STATS.DIS.wait.pUnAnswered') }}</th>
              <th>{{ $t('STATS.DIS.wait.avgTime') }}</th>
              <th>{{ $t('STATS.DIS.wait.avgWait') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(td, indexTd) in distribution.waitByDate" :key="indexTd">
              <td v-if="$i18n.locale == 'en'">{{ td.date ? jdate(td.date, 'YYYY/MM/DD') : 0 }}</td>
              <td v-else>{{ td.date ? jdate(td.date, 'jYYYY/jMM/jDD') : 0 }}</td>
              <td>{{ td.countAnswered ? td.countAnswered : 0 }}</td>
              <td>{{ td.countAnswered ? ((td.countAnswered * 100) / (td.countAnswered * 1 + (td.countUnanswered ? td.countUnanswered * 1 : 0))).toFixed(2) : 0 }} {{ $t('GENERAL.percentage') }}</td>
              <td>{{ td.countUnanswered ? td.countUnanswered : 0 }}</td>
              <td>{{ td.countUnanswered ? ((td.countUnanswered * 100) / (td.countUnanswered * 1 + (td.countAnswered ? td.countAnswered * 1 : 0))).toFixed(2) : 0 }} {{ $t('GENERAL.percentage') }}</td>
              <td>{{ td.data2Answered ? secondsToDay(td.data2Answered, false, 'table') : 0 }}</td>
              <td>{{ td.data1Answered ? secondsToDay(td.data1Answered, false, 'table') : 0 }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- پراکندگی تماس ها در ساعت -->
      <div class="table-shadow row" v-if="distribution.waitByTime" id="waitByTime">
        <!-- title -->
        <div class="d-flex justify-content-between align-items-center w-100">
          <div class="d-flex">
            <div class="guide" v-if="$t('STATS.DIS.dispersion.GUIDE')">
              <p>{{ $t('STATS.DIS.dispersion.GUIDE') }}</p>
            </div>
            <h5 class="m-0">{{ $t('STATS.DIS.dispersion.title') }}</h5>
          </div>
          <div class="export">
            <div class="pdf" @click="tableExport('DIS_waitByTime', 'pdf')" :title="$t('GENERAL.pdfExport')"></div>
            <div class="excel" @click="tableExport('DIS_waitByTime', 'xls')" :title="$t('GENERAL.excelExport')"></div>
            <div class="csv" @click="tableExport('DIS_waitByTime', 'csv')" :title="$t('GENERAL.csvExport')"></div>
          </div>
        </div>

        <!--vue good table -->
        <div class="w-100" dir="ltr">
          <vue-good-table :columns="columnsWaitByTime" :rows="distribution.waitByTime" :search-options="optionsTable">
            <!-- customize fields  -->
            <template #table-row="props">
              <span v-if="props.column.field == 'pAnswered'">
                <span dir="rtl">{{ props.row.countAnswered ? ((props.row.countAnswered * 100) / (props.row.countAnswered * 1 + (props.row.countUnanswered ? props.row.countUnanswered * 1 : 0))).toFixed(2) : 0 }} {{ $t('GENERAL.percentage') }}</span>
              </span>
              <span v-else-if="props.column.field == 'pUnAnswered'">
                <span dir="rtl">{{ props.row.countUnanswered ? ((props.row.countUnanswered * 100) / (props.row.countUnanswered * 1 + (props.row.countAnswered ? props.row.countAnswered * 1 : 0))).toFixed(2) : 0 }} {{ $t('GENERAL.percentage') }}</span>
              </span>
              <span v-else-if="props.column.field == 'data2Answered'">
                <span dir="rtl">{{ props.row.data2Answered ? secondsToDay(props.row.data2Answered, false, 'table') : 0 }} </span>
              </span>
              <span v-else-if="props.column.field == 'data1Answered'">
                <span dir="rtl">{{ props.row.data1Answered ? secondsToDay(props.row.data1Answered, false, 'table') : 0 }}</span>
              </span>
              <span v-else-if="props.column.field == 'countUnanswered'">
                <span>{{ props.row.countUnanswered ? props.row.countUnanswered : 0 }}</span>
              </span>
              <span v-else>
                {{ props.formattedRow[props.column.field] }}
              </span>
            </template>
          </vue-good-table>
        </div>

        <!-- the page content for export  -->
        <table class="mt-3" id="DIS_waitByTime" v-show="false">
          <thead>
            <tr>
              <th>{{ $t('STATS.DIS.dispersion.time') }}</th>
              <th>{{ $t('STATS.DIS.dispersion.answered') }}</th>
              <th>{{ $t('STATS.DIS.dispersion.pAnswered') }}</th>
              <th>{{ $t('STATS.DIS.dispersion.unAnswered') }}</th>
              <th>{{ $t('STATS.DIS.dispersion.pUnAnswered') }}</th>
              <th>{{ $t('STATS.DIS.dispersion.avgTime') }}</th>
              <th>{{ $t('STATS.DIS.dispersion.avgWait') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(td, indexTd) in distribution.waitByTime" :key="indexTd">
              <td>{{ td.hour }}</td>
              <td>{{ td.countAnswered ? td.countAnswered : 0 }}</td>
              <td>{{ td.countAnswered ? ((td.countAnswered * 100) / (td.countAnswered * 1 + (td.countUnanswered ? td.countUnanswered * 1 : 0))).toFixed(2) : 0 }} {{ $t('GENERAL.percentage') }}</td>
              <td>{{ td.countUnanswered ? td.countUnanswered : 0 }}</td>
              <td>{{ td.countUnanswered ? ((td.countUnanswered * 100) / (td.countUnanswered * 1 + (td.countAnswered ? td.countAnswered * 1 : 0))).toFixed(2) : 0 }} {{ $t('GENERAL.percentage') }}</td>
              <td>{{ td.data2Answered ? secondsToDay(td.data2Answered, false, 'table') : 0 }}</td>
              <td>{{ td.data1Answered ? secondsToDay(td.data1Answered, false, 'table') : 0 }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!--  نمودار پاسخ داده شده / پاسخ داده نشده در ساعت -->
      <div class="table-shadow row" v-if="distribution.chartAnswered" id="chartAnswered">
        <div class="col-12">
          <!-- title -->
          <div class="d-flex">
            <div class="guide" v-if="$t('STATS.DIS.chartAnswered.GUIDE')">
              <p>{{ $t('STATS.DIS.chartAnswered.GUIDE') }}</p>
            </div>
            <h5 class="m-0">{{ $t('STATS.DIS.chartAnswered.title') }}</h5>
          </div>
          <!-- chart -->
          <barChart :data="distribution.chartAnswered"></barChart>
        </div>
      </div>

      <!--  نمودار میانگین  زمان صحبت در ساعت -->
      <div class="table-shadow row" v-if="distribution.chartTimeAnswered" id="chartTimeAnswered">
        <div class="col-12">
          <!-- title -->
          <div class="d-flex">
            <div class="guide" v-if="$t('STATS.DIS.chartTimeAnswered.GUIDE')">
              <p>{{ $t('STATS.DIS.chartTimeAnswered.GUIDE') }}</p>
            </div>
            <h5 class="m-0">{{ $t('STATS.DIS.chartTimeAnswered.title') }}</h5>
          </div>
          <!-- chart -->
          <barChart :data="distribution.chartTimeAnswered" :convertTime="true" :customLabel="'Chart.avg'"></barChart>
        </div>
      </div>

      <!--  نمودار میانگین زمان انتظار در ساعت -->
      <div class="table-shadow row" v-if="distribution.chartDelayAnswered" id="chartDelayAnswered">
        <div class="col-12">
          <!-- title -->
          <div class="d-flex">
            <div class="guide" v-if="$t('STATS.DIS.chartDelayAnswered.GUIDE')">
              <p>{{ $t('STATS.DIS.chartDelayAnswered.GUIDE') }}</p>
            </div>
            <h5 class="m-0">{{ $t('STATS.DIS.chartDelayAnswered.title') }}</h5>
          </div>
          <!-- chart -->
          <barChart :data="distribution.chartDelayAnswered" :convertTime="true" :customLabel="'Chart.avg'"></barChart>
        </div>
      </div>

      <!-- پراکندگی تماس ها در روز های هفته -->
      <div class="table-shadow row" v-if="distribution.answeredInWeek" id="answeredInWeek">
        <!-- title -->
        <div class="d-flex justify-content-between align-items-center w-100">
          <div class="d-flex">
            <div class="guide" v-if="$t('STATS.DIS.dispersionInWeek.GUIDE')">
              <p>{{ $t('STATS.DIS.dispersionInWeek.GUIDE') }}</p>
            </div>
            <h5 class="m-0">{{ $t('STATS.DIS.dispersionInWeek.title') }}</h5>
          </div>
          <div class="export">
            <div class="pdf" @click="tableExport('DIS_answeredInWeek', 'pdf')" :title="$t('GENERAL.pdfExport')"></div>
            <div class="excel" @click="tableExport('DIS_answeredInWeek', 'xls')" :title="$t('GENERAL.excelExport')"></div>
            <div class="csv" @click="tableExport('DIS_answeredInWeek', 'csv')" :title="$t('GENERAL.csvExport')"></div>
          </div>
        </div>

        <!--vue good table -->
        <div class="w-100" dir="ltr">
          <vue-good-table :columns="columnsAnsweredInWeek" :rows="distribution.answeredInWeek" :search-options="optionsTable">
            <!-- customize fields  -->
            <template #table-row="props">
              <span v-if="props.column.field == 'day'">
                <span dir="rtl">{{ showDay(props.row.day) }}</span>
              </span>
              <span v-else-if="props.column.field == 'pAnswered'">
                <span dir="rtl">{{ props.row.countAnswered ? ((props.row.countAnswered * 100) / (props.row.countAnswered * 1 + (props.row.countUnanswered ? props.row.countUnanswered * 1 : 0))).toFixed(2) : 0 }} {{ $t('GENERAL.percentage') }}</span>
              </span>
              <span v-else-if="props.column.field == 'pUnAnswered'">
                <span dir="rtl">{{ props.row.countUnanswered ? ((props.row.countUnanswered * 100) / (props.row.countUnanswered * 1 + (props.row.countAnswered ? props.row.countAnswered * 1 : 0))).toFixed(2) : 0 }} {{ $t('GENERAL.percentage') }}</span>
              </span>
              <span v-else-if="props.column.field == 'data2Answered'">
                <span dir="rtl">{{ props.row.data2Answered ? secondsToDay(props.row.data2Answered, false, 'table') : 0 }}</span>
              </span>
              <span v-else-if="props.column.field == 'data1Answered'">
                <span dir="rtl">{{ props.row.data1Answered ? secondsToDay(props.row.data1Answered, false, 'table') : 0 }}</span>
              </span>
              <span v-else-if="props.column.field == 'countUnanswered'">
                <span>{{ props.row.countUnanswered ? props.row.countUnanswered : 0 }}</span>
              </span>
              <span v-else>
                {{ props.formattedRow[props.column.field] }}
              </span>
            </template>
          </vue-good-table>
        </div>

        <!-- the page content for export -->
        <table class="mt-3" id="DIS_answeredInWeek" v-show="false">
          <thead>
            <tr>
              <th>{{ $t('STATS.DIS.dispersionInWeek.day') }}</th>
              <th>{{ $t('STATS.DIS.dispersionInWeek.answered') }}</th>
              <th>{{ $t('STATS.DIS.dispersionInWeek.pAnswered') }}</th>
              <th>{{ $t('STATS.DIS.dispersionInWeek.unAnswered') }}</th>
              <th>{{ $t('STATS.DIS.dispersionInWeek.pUnAnswered') }}</th>
              <th>{{ $t('STATS.DIS.dispersionInWeek.avgTime') }}</th>
              <th>{{ $t('STATS.DIS.dispersionInWeek.avgWait') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(td, indexTd) in distribution.answeredInWeek" :key="indexTd">
              <td>{{ showDay(td.day) }}</td>
              <td>{{ td.countAnswered ? td.countAnswered : 0 }}</td>
              <td>{{ td.countAnswered ? ((td.countAnswered * 100) / (td.countAnswered * 1 + (td.countUnanswered ? td.countUnanswered * 1 : 0))).toFixed(2) : 0 }} {{ $t('GENERAL.percentage') }}</td>
              <td>{{ td.countUnanswered ? td.countUnanswered : 0 }}</td>
              <td>{{ td.countUnanswered ? ((td.countUnanswered * 100) / (td.countUnanswered * 1 + (td.countAnswered ? td.countAnswered * 1 : 0))).toFixed(2) : 0 }} {{ $t('GENERAL.percentage') }}</td>
              <td>{{ td.data2Answered ? secondsToDay(td.data2Answered, false, 'table') : 0 }}</td>
              <td>{{ td.data1Answered ? secondsToDay(td.data1Answered, false, 'table') : 0 }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!--  نمودار پاسخ به تماس ها براساس روزهای هفته -->
      <div class="table-shadow row" v-if="distribution.chartAnsweredWeek" id="chartAnsweredWeek">
        <div class="col-12">
          <!-- title -->
          <div class="d-flex">
            <div class="guide" v-if="$t('STATS.DIS.chartAnsweredWeek.GUIDE')">
              <p>{{ $t('STATS.DIS.chartAnsweredWeek.GUIDE') }}</p>
            </div>
            <h5 class="m-0">{{ $t('STATS.DIS.chartAnsweredWeek.title') }}</h5>
          </div>
          <!-- chart -->
          <barChart :data="distribution.chartAnsweredWeek"></barChart>
        </div>
      </div>

      <!--  نمودار میانگین مدت تماس براساس روزهای هفته -->
      <div class="table-shadow row" v-if="distribution.chartTimeAnsweredWeek" id="chartTimeAnsweredWeek">
        <div class="col-12">
          <!-- title -->
          <div class="d-flex">
            <div class="guide" v-if="$t('STATS.DIS.chartTimeAnsweredWeek.GUIDE')">
              <p>{{ $t('STATS.DIS.chartTimeAnsweredWeek.GUIDE') }}</p>
            </div>
            <h5 class="m-0">{{ $t('STATS.DIS.chartTimeAnsweredWeek.title') }}</h5>
          </div>
          <!-- chart -->
          <barChart :data="distribution.chartTimeAnsweredWeek" :convertTime="true" :customLabel="'Chart.avg'"></barChart>
        </div>
      </div>

      <!-- پراکندگی تماس ها در ماه -->
      <div class="table-shadow row" v-if="distribution.answeredInMonth" id="answeredInMonth">
        <!-- title -->
        <div class="d-flex justify-content-between align-items-center w-100">
          <div class="d-flex">
            <div class="guide" v-if="$t('STATS.DIS.dispersionInMonth.GUIDE')">
              <p>{{ $t('STATS.DIS.dispersionInMonth.GUIDE') }}</p>
            </div>
            <h5 class="m-0">{{ $t('STATS.DIS.dispersionInMonth.title') }}</h5>
          </div>
          <div class="export">
            <div class="pdf" @click="tableExport('DIS_answeredInMonth', 'pdf')" :title="$t('GENERAL.pdfExport')"></div>
            <div class="excel" @click="tableExport('DIS_answeredInMonth', 'xls')" :title="$t('GENERAL.excelExport')"></div>
            <div class="csv" @click="tableExport('DIS_answeredInMonth', 'csv')" :title="$t('GENERAL.csvExport')"></div>
          </div>
        </div>

        <!--vue good table -->
        <div class="w-100" dir="ltr">
          <vue-good-table :columns="columnsAnsweredInMonth" :rows="distribution.answeredInMonth" :search-options="optionsTable">
            <!-- customize fields  -->
            <template #table-row="props">
              <span v-if="props.column.field == 'month'">
                <span v-if="$i18n.locale == 'en'" dir="rtl">{{ props.row.month }}</span>
                <span v-else dir="rtl">{{ jdate(props.row.time, 'jMM') }}</span>
              </span>
              <span v-else-if="props.column.field == 'pAnswered'">
                <span dir="rtl">{{ props.row.countAnswered ? ((props.row.countAnswered * 100) / (props.row.countAnswered * 1 + (props.row.countUnanswered ? props.row.countUnanswered * 1 : 0))).toFixed(2) : 0 }} {{ $t('GENERAL.percentage') }}</span>
              </span>
              <span v-else-if="props.column.field == 'pUnAnswered'">
                <span dir="rtl">{{ props.row.countUnanswered ? ((props.row.countUnanswered * 100) / (props.row.countUnanswered * 1 + (props.row.countAnswered ? props.row.countAnswered * 1 : 0))).toFixed(2) : 0 }} {{ $t('GENERAL.percentage') }}</span>
              </span>
              <span v-else-if="props.column.field == 'data2Answered'">
                <span dir="rtl">{{ props.row.data2Answered ? secondsToDay(props.row.data2Answered, false, 'table') : 0 }} </span>
              </span>
              <span v-else-if="props.column.field == 'data1Answered'">
                <span dir="rtl">{{ props.row.data1Answered ? secondsToDay(props.row.data1Answered, false, 'table') : 0 }} </span>
              </span>
              <span v-else-if="props.column.field == 'countUnanswered'">
                <span>{{ props.row.countUnanswered ? props.row.countUnanswered : 0 }}</span>
              </span>
              <span v-else>
                {{ props.formattedRow[props.column.field] }}
              </span>
            </template>
          </vue-good-table>
        </div>

        <!-- the page content for export -->
        <table class="mt-3" id="DIS_answeredInMonth" v-show="false">
          <thead>
            <tr>
              <th>{{ $t('STATS.DIS.dispersionInMonth.month') }}</th>
              <th>{{ $t('STATS.DIS.dispersionInMonth.answered') }}</th>
              <th>{{ $t('STATS.DIS.dispersionInMonth.pAnswered') }}</th>
              <th>{{ $t('STATS.DIS.dispersionInMonth.unAnswered') }}</th>
              <th>{{ $t('STATS.DIS.dispersionInMonth.pUnAnswered') }}</th>
              <th>{{ $t('STATS.DIS.dispersionInMonth.avgTime') }}</th>
              <th>{{ $t('STATS.DIS.dispersionInMonth.avgWait') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(td, indexTd) in distribution.answeredInMonth" :key="indexTd">
              <td>{{ td.month }}</td>
              <td>{{ td.countAnswered ? td.countAnswered : 0 }}</td>
              <td>{{ td.countAnswered ? ((td.countAnswered * 100) / (td.countAnswered * 1 + (td.countUnanswered ? td.countUnanswered * 1 : 0))).toFixed(2) : 0 }} {{ $t('GENERAL.percentage') }}</td>
              <td>{{ td.countUnanswered ? td.countUnanswered : 0 }}</td>
              <td>{{ td.countUnanswered ? ((td.countUnanswered * 100) / (td.countUnanswered * 1 + (td.countAnswered ? td.countAnswered * 1 : 0))).toFixed(2) : 0 }} {{ $t('GENERAL.percentage') }}</td>
              <td>{{ td.data2Answered ? secondsToDay(td.data2Answered, false, 'table') : 0 }}</td>
              <td>{{ td.data1Answered ? secondsToDay(td.data1Answered, false, 'table') : 0 }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- loader -->
    <loader v-if="!distribution.details"></loader>
  </div>
</template>

<script>

/** import pinia homeStore*/
import { useHome } from '../../js/pinia/home'
import { useGeneral } from '../../js/pinia/general'
import { useDistribution } from '../../js/pinia/distribution'

// helper
import helper from '../../js/helper'

import pdfExport from '../../js/pdfExport'

// import chart
import barChart from '../chart/BarChart.vue'

// import vue good table
import { VueGoodTable } from 'vue-good-table-next';



export default {
  name: 'distribution',
  mixins: [helper, pdfExport],
  data() {
    return {
      isLoading: false,

      optionsTable: {
        enabled: true,
        placeholder: this.$t('GENERAL.searchFeild')
      },
      paginationOptions: {
        enabled: true,
        mode: 'records',
        perPage: 10,
        position: 'bottom',
        perPageDropdown: [10, 25, 50, 100],
        dropdownAllowAll: false,
        firstLabel: this.$t('GENERAL.firstPage'),
        lastLabel: this.$t('GENERAL.LastPage'),
        nextLabel: this.$t('GENERAL.next'),
        prevLabel: this.$t('GENERAL.back'),
        rowsPerPageLabel: this.$t('GENERAL.rowsperpage'),
        ofLabel: this.$t('GENERAL.of'),
        pageLabel: this.$t('GENERAL.page'), // for 'pages' mode
        allLabel: this.$t('GENERAL.all'),
      },

      columnsWaitByDate: [

        {
          label: this.$t('STATS.DIS.wait.avgWait'),
          field: 'data1Answered',
          type: 'number',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('STATS.DIS.wait.avgTime'),
          field: 'data2Answered',
          type: 'number',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('STATS.DIS.wait.pUnAnswered'),
          field: 'pUnAnswered',
          sortable: false,

          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },

        {
          label: this.$t('STATS.DIS.wait.unAnswered'),
          field: 'countUnanswered',
          type: 'number',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },

        {
          label: this.$t('STATS.DIS.wait.pAnswered'),
          field: 'pAnswered',
          sortable: false,
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('STATS.DIS.wait.answered'),
          field: 'countAnswered',
          type: 'number',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('STATS.DIS.wait.data'),
          field: 'date',
          sortable: false,
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },

        },
      ],

      columnsWaitByTime: [

        {
          label: this.$t('STATS.DIS.dispersion.avgWait'),
          field: 'data1Answered',
          type: 'number',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('STATS.DIS.dispersion.avgTime'),
          field: 'data2Answered',
          type: 'number',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('STATS.DIS.dispersion.pUnAnswered'),
          field: 'pUnAnswered',
          sortable: false,
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },

        },

        {
          label: this.$t('STATS.DIS.dispersion.unAnswered'),
          field: 'countUnanswered',
          type: 'number',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },

        {
          label: this.$t('STATS.DIS.dispersion.pAnswered'),
          field: 'pAnswered',
          sortable: false,
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('STATS.DIS.dispersion.answered'),
          field: 'countAnswered',
          type: 'number',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('STATS.DIS.dispersion.time'),
          field: 'hour',
          type: 'number',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },

        },
      ],

      columnsAnsweredInWeek: [

        {
          label: this.$t('STATS.DIS.dispersionInWeek.avgWait'),
          field: 'data1Answered',
          type: 'number',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('STATS.DIS.dispersionInWeek.avgTime'),
          field: 'data2Answered',
          type: 'number',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('STATS.DIS.dispersionInWeek.pUnAnswered'),
          field: 'pUnAnswered',
          sortable: false,
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },

        },

        {
          label: this.$t('STATS.DIS.dispersionInWeek.unAnswered'),
          field: 'countUnanswered',
          type: 'number',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },

        {
          label: this.$t('STATS.DIS.dispersionInWeek.pAnswered'),
          field: 'pAnswered',
          sortable: false,
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('STATS.DIS.dispersionInWeek.answered'),
          field: 'countAnswered',
          type: 'number',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('STATS.DIS.dispersionInWeek.day'),
          field: 'day',
          sortable: false,
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
      ],

      columnsAnsweredInMonth: [

        {
          label: this.$t('STATS.DIS.dispersionInMonth.avgWait'),
          field: 'data1Answered',
          type: 'number',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('STATS.DIS.dispersionInMonth.avgTime'),
          field: 'data2Answered',
          type: 'number',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('STATS.DIS.dispersionInMonth.pUnAnswered'),
          field: 'pUnAnswered',
          sortable: false,
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },

        },

        {
          label: this.$t('STATS.DIS.dispersionInMonth.unAnswered'),
          field: 'countUnanswered',
          type: 'number',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },

        {
          label: this.$t('STATS.DIS.dispersionInMonth.pAnswered'),
          field: 'pAnswered',
          sortable: false,
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('STATS.DIS.dispersionInMonth.answered'),
          field: 'countAnswered',
          type: 'number',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('STATS.DIS.dispersionInMonth.month'),
          field: 'month',
          type: 'number',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
      ],


    }
  },
  methods: {
    /** show lable object */
    showLable(items) {
      let lable = ''
      items.map((item) => {
        lable += ', ' + item.title
      })
      return lable.substring(1)
    },
    /** convert number of day to fa day */
    showDay(day) {
      let faDay = ''
      switch (day) {
        case '0':
          faDay = this.$t('GENERAL.Monday')
          break;
        case '1':
          faDay = this.$t('GENERAL.Tuesday')
          break;
        case '2':
          faDay = this.$t('GENERAL.Wednesday')
          break;
        case '3':
          faDay = this.$t('GENERAL.Thursday')
          break;
        case '4':
          faDay = this.$t('GENERAL.Friday')
          break;
        case '5':
          faDay = this.$t('GENERAL.Saturday')
          break;
        case '6':
          faDay = this.$t('GENERAL.Sunday')
          break;
        default:
          break;
      }
      return faDay
    },

    /** get data from api */
    async getData() {
      /** back to home component */
      if (!this.home.queues.length) return this.$router.push({ name: 'stats' })

      try {
        this.isLoading = true;

        let agents = []
        this.home.agents.map((item) => { return agents.push(item.code) })
        let queues = []
        this.home.queues.map((item) => { return queues.push(item.code) })

        let data = {
          'method': 'distribution_getData',
          'queues': queues,
          'agents': agents,
          'timeFilter': this.home.timeFilter,
          'toFilter': this.home.toFilter ? this.moment(this.home.toFilter + ' ' + this.home.toTime, 'jYYYY/jM/jD HH:mm', 'YYYY-MM-DD HH:mm') : null,
          'fromFilter': this.home.fromFilter ? this.moment(this.home.fromFilter + ' ' + this.home.fromTime, 'jYYYY/jM/jD HH:mm', 'YYYY-MM-DD HH:mm') : null,
        }
        let req = await this.$axios({
          url: '/stats/distributionActions',
          data: data
        })

        /** merge data feild waitByDate*/
        let objWaitByDate = req.data.waitByDate
        let mergedByDate = this.merge(objWaitByDate.answered, objWaitByDate.Unanswered, 'date');
        mergedByDate = this.merge(objWaitByDate.answered, objWaitByDate.login, 'date');
        mergedByDate = this.merge(objWaitByDate.answered, objWaitByDate.logout, 'date');

        /** merge data feild waitByTime*/
        let objWaitByTime = req.data.waitByTime
        let mergedByTime = this.merge(objWaitByTime.answered, objWaitByTime.Unanswered, 'hour');
        mergedByTime = this.merge(objWaitByTime.answered, objWaitByTime.login, 'hour');
        mergedByTime = this.merge(objWaitByTime.answered, objWaitByTime.logout, 'hour');
        let sort = mergedByTime.sort((a, b) => a.hour - b.hour)
        mergedByTime = sort

        /** merge data feild AnsweredInWeek*/
        let objAnsweredInWeek = req.data.answeredInWeek
        let mergedInWeek = this.merge(objAnsweredInWeek.answered, objAnsweredInWeek.Unanswered, 'day');
        mergedInWeek = this.merge(objAnsweredInWeek.answered, objAnsweredInWeek.login, 'day');
        mergedInWeek = this.merge(objAnsweredInWeek.answered, objAnsweredInWeek.logout, 'day');
        sort = mergedInWeek.sort((a, b) => a.time - b.time)
        mergedInWeek = sort

        // add all hours in mergedInWeek
        let addAllHours = [];
        for (const hour of Array.from(Array(24).keys())) {
          let duplicate = false;
          mergedByTime.map((item) => {
            if (item.hour == hour)
              duplicate = item;
          })

          if (!duplicate)
            addAllHours.push({
              countAnswered: 0,
              countUnanswered: 0,
              data1Answered: 0,
              data1Unanswered: 0,
              data2Answered: 0,
              data2Unanswered: 0,
              data3Answered: 0,
              data3Unanswered: 0,
              hour: hour.toString(),
            })
          else
            addAllHours.push(duplicate)
        }
        addAllHours;


        /** generat data chart پاسخ داده شده / بدون پاسخ در ساعت */
        let chartAnswered = addAllHours.map((item) => {
          return {
            'lable': item.hour,
            [this.$t('STATS.DIS.chartAnswered.answered')]: parseInt(item.countAnswered),
            [this.$t('STATS.DIS.chartAnswered.unAnswered')]: parseInt(item.countUnanswered),
          }
        })

        // <!--  نمودار میانگین  زمان صحبت در ساعت -->
        let chartTimeAnswered = addAllHours.map((item) => {
          return {
            'lable': item.hour,
            [this.$t('STATS.DIS.chartTimeAnswered.avgTime')]: parseFloat(item.data2Answered)
          }
        })

        // <!--  نمودار میانگین زمان انتظار در ساعت -->
        let chartDelayAnswered = addAllHours.map((item) => {
          return {
            'lable': item.hour,
            [this.$t('STATS.DIS.chartDelayAnswered.avgDelay')]: parseFloat(item.data1Answered)

          }
        })

        // add all days in mergedInWeek
        let addAllDayes = [];
        for (const day of [0, 1, 2, 3, 4, 5, 6]) {
          let duplicate = false;
          mergedInWeek.map((item) => {
            if (item.day == day)
              duplicate = item;
          })

          if (!duplicate)
            addAllDayes.push({
              countAnswered: 0,
              countUnanswered: 0,
              data1Answered: 0,
              data1Unanswered: 0,
              data2Answered: 0,
              data2Unanswered: 0,
              data3Answered: 0,
              data3Unanswered: 0,
              day: day.toString(),
            })
          else
            addAllDayes.push(duplicate)
        }
        mergedInWeek = addAllDayes;
        // نمودار پاسخ به تماس ها براساس روزهای هفته
        let ls = this;
        let chartAnsweredWeek = mergedInWeek.map((item) => {
          return {
            'lable': ls.showDay(item.day),
            [this.$t('STATS.DIS.chartAnsweredWeek.count')]: item.countAnswered * 1
          }
        })

        // نمودار میانگین مدت تماس براساس روزهای هفته
        let chartTimeAnsweredWeek = mergedInWeek.map((item) => {
          return {
            'lable': ls.showDay(item.day),
            [this.$t('STATS.DIS.chartTimeAnsweredWeek.avgAnswered')]: parseFloat(item.data2Answered)

          }
        })

        /** merge data feild AnsweredInMonth*/
        let objAnsweredInMonth = req.data.answeredInMonth
        let mergedInMonth = this.merge(objAnsweredInMonth.answered, objAnsweredInMonth.Unanswered, 'month');
        mergedInMonth = this.merge(objAnsweredInMonth.answered, objAnsweredInMonth.login, 'month');
        mergedInMonth = this.merge(objAnsweredInMonth.answered, objAnsweredInMonth.logout, 'month');
        sort = mergedInMonth.sort((a, b) => a.time - b.time)
        mergedInMonth = sort

        /**start save req for show in page distribution */
        this.distribution.details = req.data.details
        this.distribution.waitByDate = mergedByDate
        this.distribution.waitByTime = mergedByTime
        this.distribution.chartAnswered = chartAnswered
        this.distribution.chartTimeAnswered = chartTimeAnswered
        this.distribution.chartDelayAnswered = chartDelayAnswered
        this.distribution.answeredInWeek = mergedInWeek
        this.distribution.chartTimeAnsweredWeek = chartTimeAnsweredWeek
        this.distribution.chartAnsweredWeek = chartAnsweredWeek
        this.distribution.answeredInMonth = mergedInMonth
        /**end save req for show in page distribution */

      } catch (error) {
        console.error(error);
      }
      this.isLoading = false;
    },
    /** merge object with object  use for data waitByTime
     * @param 1 and 2 is object
     * @param 3 is string (name of Common feild )
     */
    merge(first, two, baseField) {
      try {
        const mergeByProperty = (target, source, prop) => {
          source.forEach(sourceElement => {
            let targetElement = target.find(targetElement => {
              return sourceElement[prop] === targetElement[prop];
            })
            targetElement ? Object.assign(targetElement, sourceElement) : target.push(sourceElement);
          })
        }
        mergeByProperty(first, two, baseField);
        return first

      } catch (error) {
        console.error(error);
      }
    },

  },
  components: {
    barChart,
    VueGoodTable
  },
  mounted() {
    this.getData()
  },

  setup() {
    const home = useHome()
    const distribution = useDistribution()
    const general = useGeneral()

    return {
      home,
      distribution,
      general,
    }
  }
}

</script>

<style lang='scss'>
#distribution {
}
</style>